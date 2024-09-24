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
      <table className="w-full border-collapse bg-white shadow-sm table-auto mt-5">
        <TableHeader headers={headers} />
        <TableBody rows={rows} />
      </table>
    </div>
  )
}
;`.table {
  width: 100%; /* Ensure table takes up the full width of the content area */
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  table-layout: auto; 
  margin-top: 20px; /* Add some space above the table */
} xx

.table th,
.table td {
  padding: 8px;
  text-align: left;
} xx

.table thead th {
  background-color: #002d3c;
  color: #fff;
  font-weight: bold;
} xx

.table tbody tr:hover {
  background-color: #f1f1f1;
}

.table tbody td {
  border-bottom: 1px solid #ddd;
}

.table tbody td button {
  background-color: #002d3c;
  color: #fff;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.table tbody td button:hover {
  background-color: #005bb5;
}`
