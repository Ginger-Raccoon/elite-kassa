import React, { useState } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from '@tanstack/react-table'

import s from './ReceiptTable.module.scss'
import cn from 'classnames'
import { IconButton } from '../../IconButton/IconButton'
import SVGSymbol from '../../SVGSymbol/SVGSymbol'

export interface IReceipt {
  vendor: string
  buyer: string
  date: number
  sum: string
  actions: () => React.ReactNode
}

interface ReceiptTableProps {
  data: IReceipt[]
}

const columnHelper = createColumnHelper<IReceipt>()

const columns = [
  columnHelper.accessor('vendor', {
    cell: (info) => info.getValue(),
    header: () => (
      <span className={s.column__name}>
        Продавец
        <SVGSymbol name={'sort'} />
      </span>
    ),
  }),
  columnHelper.accessor('buyer', {
    cell: (info) => info.getValue(),
    header: () => (
      <span className={s.column__name}>
        Покупатель
        <SVGSymbol name={'sort'} />
      </span>
    ),
  }),
  columnHelper.accessor('date', {
    cell: (info) => info.getValue(),
    header: () => (
      <span className={s.column__name}>
        Дата
        <SVGSymbol name={'sort'} />
      </span>
    ),
  }),
  columnHelper.accessor('sum', {
    cell: (info) => info.getValue(),
    header: () => (
      <span className={s.column__name}>
        Сумма
        <SVGSymbol name={'sort'} />
      </span>
    ),
  }),
  columnHelper.accessor('actions', {
    cell: () => {
      return (
        <div className={s.table__buttons}>
          {/* eslint-disable-next-line no-console */}
          <IconButton
            className={s.table__button}
            iconName={'download'}
            onClick={() => {
              console.log('click')
            }}
          />
          {/* eslint-disable-next-line no-console */}
          <IconButton
            className={s.table__button}
            iconName={'download'}
            onClick={() => {
              console.log('click')
            }}
          />
        </div>
      )
    },
    header: () => <span className={s.column__name}>свитчер</span>,
  }),
]

export const ReceiptTable = (props: ReceiptTableProps) => {
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
