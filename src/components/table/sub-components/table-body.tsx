import { FC, ReactElement } from 'react'

import { IRow } from '../types'

interface ITableBodyProps {
  rows: IRow<string | ReactElement>[]
}

export const TableBody: FC<ITableBodyProps> = ({ rows }) => {
  return (
    <>
      {rows.map((row, i) => (
        <tr className="hover:bg-[#f1f1f1]" key={i}>
          {row.map((cell) => (
            <td
              className="p-2 text-left border-b border-[#ddd]"
              key={cell.id}
              id={cell.id}
            >
              {cell.text}
            </td>
          ))}
        </tr>
      ))}
    </>
  )
}
