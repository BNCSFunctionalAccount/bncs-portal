import { FC } from 'react';

import { IHeader } from '../types';

interface ITableFooterProps {
  footers: IHeader[];
  sticky?: boolean;
}

export const TableFooter: FC<ITableFooterProps> = ({ sticky, footers }) => {
  return (
    <tfoot className={`${sticky && 'sticky bottom-0'}`}>
      <tr>
        {footers.map(footer => (
          <th
            key={footer.title}
            style={{ width: footer.width ?? '200px' }}
            className="p-2 text-left"
          >
            {footer.title}
          </th>
        ))}
      </tr>
    </tfoot>
  );
};
