import { SVGSymbol } from 'shared/ui'

import s from './MessageAlert.module.scss'
import { useState } from 'react'

export const MessageAlert = () => {
  const [isMessage] = useState(true)

  return (
    <div className={s.container}>
      {isMessage && <span className={s.alert} />}
      <SVGSymbol name={'email'} />
    </div>
  )
}
