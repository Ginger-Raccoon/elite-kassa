import React, { Suspense, useMemo } from 'react'
import cn from 'classnames'

interface IProps {
  name: string
  classNames?: string
}

const SVGSymbol = ({ name, classNames, ...props }: IProps) => {
  const SVG = useMemo(
    () => React.lazy(async () => await import(`../assets/${name}.svg`)),
    [name],
  )
  return (
    <Suspense fallback={<span className={classNames} />}>
      <SVG className={cn('ico', classNames)} {...props} />
    </Suspense>
  )
}

export default SVGSymbol
