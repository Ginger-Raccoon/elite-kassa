import React, { useState } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from '@tanstack/react-table'

import s from './FirmsTable.module.scss'
import cn from 'classnames'
import { IconButton } from '../../IconButton/IconButton'
import SVGSymbol from '../../SVGSymbol/SVGSymbol'

export interface IFirms {
  name: string
  inn: string
  id: string
  action: () => React.ReactNode
}

interface FirmsTableProps {
  data: IFirms[]
}

const columnHelper = createColumnHelper<IFirms>()

const columns = [
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
    header: () => (
      <span className={s.column__name}>
        Название фирмы
        <SVGSymbol name={'sort'} />
      </span>
    ),
  }),
  columnHelper.accessor('inn', {
    cell: (info) => info.getValue(),
    header: () => (
      <span className={s.column__name}>
        Номер ИНН
        <SVGSymbol name={'sort'} />
      </span>
    ),
  }),
  columnHelper.accessor('id', {
    cell: (info) => info.getValue(),
    header: () => (
      <span className={s.column__name}>
        Идентификатор ЭДО
        <SVGSymbol name={'sort'} />
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

export const FirmsTable = (props: FirmsTableProps) => {
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
