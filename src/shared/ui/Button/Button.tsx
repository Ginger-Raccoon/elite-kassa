import cn from 'classnames'

import s from './Button.module.scss'

interface ButtonProps {
  withoutStyles?: boolean
  text: string
  classNames?: string
}

export const Button = (props: ButtonProps) => {
  const { withoutStyles = false, text, classNames } = props
  return (
    <button className={cn(s.main, !withoutStyles && s.button, classNames)}>
      {text}
    </button>
  )
}
