import { FC, MouseEvent, ReactElement } from 'react'

import { IRow } from '../types'
import { TableRow } from './table-row'

interface ITableBodyProps {
  rows: IRow<string | ReactElement>[]
  onRowClick?: (e: MouseEvent<HTMLTableRowElement>, rowId: string) => unknown
}

export const TableBody: FC<ITableBodyProps> = ({ rows, onRowClick }) => {
  return (
    <tbody>
      {rows.map((row, i) => (
        <TableRow onRowClick={onRowClick} row={row} key={i} />
      ))}
    </tbody>
  )
}
