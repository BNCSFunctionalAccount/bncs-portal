import { FC, MouseEvent, ReactElement } from 'react';

import { IRow } from '../types';

interface IRowProps {
  row: IRow<string | ReactElement>;
  onRowClick?: (e: MouseEvent<HTMLTableRowElement>, id: string) => unknown;
}

export const TableRow: FC<IRowProps> = ({ row, onRowClick }) => {
  return (
    <tr
      className={`hover:bg-lightGray ${onRowClick && 'cursor-pointer'}`}
      onClick={e => onRowClick && onRowClick(e, row.id)}
    >
      {row.cells.map(cell => (
        <TableCell key={cell.id} id={cell.id ?? ''} text={cell.text} />
      ))}
    </tr>
  );
};

interface ICellProps {
  id: string;
  text: string;
}

const TableCell: FC<ICellProps> = ({ id, text }) => (
  <td className="p-2 text-left border-b border-[#ddd]" id={id}>
    {text}
  </td>
);
