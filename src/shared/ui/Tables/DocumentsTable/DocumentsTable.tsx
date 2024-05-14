import React, { useState } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type SortingState,
} from '@tanstack/react-table'
import cn from 'classnames'

import SVGSymbol from '../../SVGSymbol/SVGSymbol'
import { IconButton } from '../../IconButton/IconButton'

import s from './DocumentsTable.module.scss'

export interface IDocuments {
  name: string
  inn: string
  action: () => React.ReactNode
}

const columnHelper = createColumnHelper<IDocuments>()

const columns = [
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
    header: () => (
      <span className={s.column__name}>
        Название фирмы <SVGSymbol name={'sort'} />
      </span>
    ),
  }),
  columnHelper.accessor('inn', {
    cell: (info) => info.getValue(),
    header: () => (
      <span className={s.column__name}>
        ИНН <SVGSymbol name={'sort'} />
      </span>
    ),
  }),
  columnHelper.accessor('action', {
    // eslint-disable-next-line no-console
    cell: () => (
      <IconButton
        className={s.table__button}
        iconName={'download'}
        onClick={() => {
          console.log('click')
        }}
      />
    ),
    header: () => <span className={s.column__name} />,
  }),
]

interface DocumentsTableProps {
  data: IDocuments[]
}

export const DocumentsTable = (props: DocumentsTableProps) => {
  const { data } = props
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  })

  return (
    <div className={s.container}>
      <div className={s.table}>
        {table.getHeaderGroups().map((headerGroup) =>
          headerGroup.headers.map((header) => (
            <div
              key={header.id}
              className={cn(s.table__cell, s.table__cell_header)}
              onClick={header.column.getToggleSortingHandler()}
            >
              {flexRender(header.column.columnDef.header, header.getContext())}
            </div>
          )),
        )}
        {table.getRowModel().rows.map((row) =>
          row.getVisibleCells().map((cell) => (
            <div key={cell.id} className={s.table__cell}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </div>
          )),
        )}
      </div>
    </div>
  )
}
