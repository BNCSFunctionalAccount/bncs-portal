import { FC, ReactElement } from 'react'

import { IRow } from '../types'

interface IRowProps {
  row: IRow<string | ReactElement>
}

export const TableRow: FC<IRowProps> = ({ row }) => {
  return (
    <tr className="hover:bg-lightGray ">
      {row.map((cell) => (
        <TableCell key={cell.id} id={cell.id ?? ''} text={cell.text} />
      ))}
    </tr>
  )
}

interface ICellProps {
  id: string
  text: string
}

const TableCell: FC<ICellProps> = ({ id, text }) => (
  <td className="p-2 text-left border-b border-[#ddd]" id={id}>
    {text}
  </td>
)
