import { FC, Fragment, SetStateAction } from 'react';
import Link from 'next/link';

import { IMenuItem } from './types';

interface ISelectItemProps {
  item: IMenuItem;
  key: string;
  setOption?: (newVal: string) => void;
  setIsOpen: (value: SetStateAction<boolean>) => void;
  selected: boolean;
}

export const SelectItem: FC<ISelectItemProps> = ({
  item,
  key,
  setOption,
  setIsOpen,
  selected,
}) => {
  return (
    <Fragment key={key}>
      {item.link ? (
        <Link
          className={`p-2 ${selected ? 'bg-slate-400 border-slate-600' : 'bg-lightGray hover:bg-slate-400 hover:border-slate-400'} hover:cursor-pointer transition-all border-b last:rounded-b`}
          href={item.link}
        >
          {item.title}
        </Link>
      ) : (
        <li
          className={`p-2 ${selected ? 'bg-slate-400 border-slate-400' : 'bg-lightGray hover:bg-slate-400 hover:border-slate-400'} hover:cursor-pointer transition-all border-b last:rounded-b`}
          onClick={e => {
            item.clickEffect && item.clickEffect(e);
            setIsOpen(false);
            setOption && setOption(item.title ?? '');
          }}
        >
          {item.title}
        </li>
      )}
    </Fragment>
  );
};
