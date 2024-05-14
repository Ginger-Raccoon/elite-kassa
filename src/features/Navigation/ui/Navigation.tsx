import React from 'react'

import { NavigationLink } from 'shared/ui'
import { NavLinks } from '../config/constants'

import s from './Navigation.module.scss'

export const Navigation = () => {
  return (
    <ul className={s.navigation}>
      {NavLinks.map((elem, idx) => (
        <NavigationLink
          key={idx}
          text={elem.text}
          to={elem.to}
          icon={elem.icon}
        />
      ))}
    </ul>
  )
}
