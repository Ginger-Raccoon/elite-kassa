import { useState } from 'react'

import s from './Balance.module.scss'

export const Balance = () => {
  const [value] = useState('XX,ХХХ,ХХХ.ХХ Р')

  return (
    <div className={s.container}>
      <p className={s.name}>Баланс</p>
      <span className={s.value}>{value}</span>
    </div>
  )
}
