import { FC, ReactElement } from 'react'

import { TableBody } from './sub-components/table-body'
import { TableFooter } from './sub-components/table-footer'
import { TableHeader } from './sub-components/table-header'
import { IHeader, IRow } from './types'

interface ITableProps {
  headers: IHeader[]
  footers?: IHeader[]
  className?: string
  border?: boolean
  sticky?: 'header' | 'footer' | 'both'
  rows: IRow<string | ReactElement>[]
  showCounter?: boolean
}

export const Table: FC<ITableProps> = ({
  headers,
  footers,
  className,
  border,
  sticky,
  rows,
  showCounter,
}) => {
  return (
    <>
      <div
        className={`mt-5 shadow-md ${border && 'border border-blue-950 border-solid'}`}
      >
        <table
          className={`${className} w-full border-collapse bg-white table-auto`}
        >
          <TableHeader
            headers={headers}
            sticky={sticky && sticky !== 'footer'}
          />
          {rows.length > 0 ? (
            <TableBody rows={rows} />
          ) : (
            <p className="p-2">No posts found matching this filter.</p>
          )}
          {footers && <TableFooter sticky={sticky && sticky !== 'header'} />}
        </table>
      </div>
      {showCounter && (
        <div className="p-1 text-left">
          Showing <span className="font-bold">{rows.length}</span> results.
        </div>
        //TODO: Pagination selector
      )}
    </>
  )
}
