import { useEffect, useState } from 'react'
import moment from 'moment'
import cn from 'classnames'

import { SVGSymbol } from 'shared/ui'

import s from './Clock.module.scss'

interface IClockProps {
  classNames?: string
}

export const Clock = (props: IClockProps) => {
  const { classNames } = props

  const dateFormat = 'D MMMM, YYYY'
  const timeFormat = 'HH:mm:ss'
  const [currentTime, setCurrentTime] = useState(
    moment().locale('ru').format(timeFormat),
  )
  const [currentDate, setCurrentDate] = useState(
    moment().locale('ru').format(dateFormat),
  )

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(moment().locale('ru').format(timeFormat))
      setCurrentDate(moment().locale('ru').format(dateFormat))
    }, 1000)

    return () => {
      clearInterval(timerId)
    }
  }, [])

  return (
    <div className={cn(s.container, classNames)}>
      <SVGSymbol name={'clock'} classNames={s.icon} />
      <p>{currentDate}</p>
      <p className={s.time}>{currentTime}</p>
    </div>
  )
}
