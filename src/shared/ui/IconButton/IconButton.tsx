import { Button, type ButtonProps } from 'antd'
import cn from 'classnames'

import { SVGSymbol } from 'shared/ui'

import s from './IconButton.module.scss'

interface IconButtonProps extends ButtonProps {
  iconName: string
  className?: string
}

export const IconButton = (props: IconButtonProps) => {
  const { iconName, className } = props

  return (
    <Button
      icon={<SVGSymbol name={iconName} />}
      className={cn(s.button, className)}
      {...props}
    />
  )
}
