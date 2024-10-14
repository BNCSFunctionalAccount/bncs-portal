'use client';

import { FC, MouseEvent, useContext, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import { useLiveQuery } from 'next-sanity/preview';

import { DRIVER_HEADERS } from '~/app/(main)/drivers/constants';
import { DriversContext } from '~/lib/providers/DriversProvider';
import { Post, postsQuery } from '~/lib/sanity.queries';

import { IRow } from './table/types';
import { LoadingSkeleton } from './LoadingSkeleton';
import { Table } from './table';

const userCanDownload = (
  userRoles: string[],
  driverRoles: string[]
): boolean => {
  return userRoles.some(role => driverRoles?.includes(role));
};

interface IDriversTableProps {
  staticPosts: Post[];
}

export const DriversTable: FC<IDriversTableProps> = ({ staticPosts }) => {
  const { userRoles, filter, searchQuery, setUserRoles } =
    useContext(DriversContext);

  const { user, isLoading, error } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user && user['https://localhost:3000/roles']) {
      const roles = user['https://localhost:3000/roles'] as string[];
      setUserRoles(roles);
    }
  }, [user, setUserRoles]);

  const [posts] = useLiveQuery<Post[]>(staticPosts, postsQuery);

  const filteredPosts = posts.filter(post => {
    const isLicensed = userCanDownload(userRoles, post.roles);
    const isCommerciallyAvailable = post.commerciallyAvailable === true;

    // Show post if the user can download it OR if it's commercially available
    const shouldDisplay = isLicensed || isCommerciallyAvailable;

    // Filter by the selected license filter
    const matchesLicenseFilter =
      filter === 'All' ||
      (filter === 'Available' && isLicensed) ||
      (filter === '' && !isLicensed);

    // Filter for search query
    const matchesSearch = post.description
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());

    // Return true if all conditions are met
    return shouldDisplay && matchesLicenseFilter && matchesSearch;
  });

  const handleOnRowClick = (e: MouseEvent<HTMLTableRowElement>, id: string) => {
    router.push(`/post/${id}`);
  };

  const tableRows: IRow<string>[] = (filteredPosts ?? []).map(post => {
    const row: IRow<string> = {
      cells: [
        { text: post.title ?? '', id: post._id },
        { text: post.version ?? '' },
        {
          text: Array.isArray(post.deviceManufacturer)
            ? post.deviceManufacturer.join(', ')
            : post.deviceManufacturer ?? '',
        },
        { text: post.description ?? '' },
        {
          text: userCanDownload(userRoles, post.roles) ? 'Available' : '',
        },
      ],
      id: post.slug.current,
    };
    return row;
  });

  if (isLoading) {
    return <LoadingSkeleton count={5} height={30} duration={0.5} />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Table
      onRowClick={handleOnRowClick}
      border={true}
      rows={tableRows}
      headers={DRIVER_HEADERS}
      sticky={'header'}
    />
  );
};
