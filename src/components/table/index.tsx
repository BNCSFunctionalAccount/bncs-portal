import { FC, ReactElement } from 'react'
import { IHeader, IRow } from './types'
import { TableHeader } from './sub-components/table-header'
import { TableBody } from './sub-components/table-body'

interface ITableProps {
  headers: IHeader[]
  className?: string
  rows: IRow<string | ReactElement>[]
}

export const Table: FC<ITableProps> = ({ headers, className, rows }) => {
  return (
    <div>
      <table className="w-full border-collapse bg-white shadow-md table-auto mt-5">
        <TableHeader headers={headers} />
        <TableBody rows={rows} />
      </table>
    </div>
  )
}
