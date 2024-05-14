import React, { Suspense, useMemo } from 'react'
import cn from 'classnames'

import s from './SVGSymbol.module.scss'

interface IProps {
  name: string
  classNames?: string
}

const SVGSymbol = ({ name, classNames, ...props }: IProps) => {
  const SVG = useMemo(
    () => React.lazy(async () => await import(`../../assets/${name}.svg`)),
    [name],
  )
  return (
    <Suspense fallback={<span className={classNames} />}>
      <SVG className={cn(s.icon, classNames)} {...props} />
    </Suspense>
  )
}

export default SVGSymbol
