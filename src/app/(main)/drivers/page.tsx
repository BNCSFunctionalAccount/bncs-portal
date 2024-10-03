import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import { getStaticPosts } from '~/utils';

import { DriversFilter } from '../../../components/DriversFilter';
import { DriversSearch } from '../../../components/DriversSearch';
import { DriversTable } from '../../../components/DriversTable';
import { DriversProvider } from '../../../lib/providers/DriversProvider';

export default withPageAuthRequired(
  async function DriversPage() {
    const staticPosts = await getStaticPosts();

    return (
      <section className="flex flex-col h-full gap-2">
        <h1 className="text-4xl">Drivers</h1>
        <DriversProvider>
          <div className="flex gap-4 items-start">
            <DriversFilter />
            <DriversSearch />
          </div>
          <DriversTable staticPosts={staticPosts} />
        </DriversProvider>
      </section>
    );
  },
  { returnTo: '/drivers' }
);
