import { Input, type InputProps } from 'antd'
import cn from 'classnames'

import s from './SearchField.module.scss'

export const SearchField = (props: InputProps) => {
  const { placeholder = 'Поиск', className } = props

  return (
    <Input
      placeholder={placeholder}
      className={cn(s.input, className)}
      type={'search'}
      {...props}
    />
  )
}
