import { FC } from 'react'
import { IHeader } from '../types'

interface ITableHeaderProps {
  headers: IHeader[]
}

export const TableHeader: FC<ITableHeaderProps> = ({ headers }) => {
  return (
    <thead className="bg-[#002d3c] text-white font-bold text-left">
      <tr>
        {headers.map((header) => (
          <th
            key={header.title}
            style={{ minWidth: header.width ?? '200px' }}
            className={`p-2 text-left`}
          >
            {header.title}
          </th>
        ))}
      </tr>
    </thead>
  )
}
