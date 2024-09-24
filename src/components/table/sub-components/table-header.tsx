import { FC } from 'react'

import { IHeader } from '../types'

interface ITableHeaderProps {
  headers: IHeader[]
  sticky?: boolean
}

export const TableHeader: FC<ITableHeaderProps> = ({ headers, sticky }) => {
  return (
    <thead
      className={`bg-[#002d3c] text-white font-bold text-left ${sticky && 'sticky top-0'}`}
    >
      <tr>
        {headers.map((header) => (
          <th
            key={header.title}
            style={{ width: header.width ?? '200px' }}
            className="p-2 text-left"
          >
            {header.title}
          </th>
        ))}
      </tr>
    </thead>
  )
}
