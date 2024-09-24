import { FC, ReactElement } from 'react'

import { IRow } from '../types'
import { TableRow } from './table-row'

interface ITableBodyProps {
  rows: IRow<string | ReactElement>[]
}

export const TableBody: FC<ITableBodyProps> = ({ rows }) => {
  return (
    <tbody>
      {rows.map((row, i) => (
        <TableRow row={row} key={i} />
      ))}
    </tbody>
  )
}
