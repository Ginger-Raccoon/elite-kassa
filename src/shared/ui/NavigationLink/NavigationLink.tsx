import { type FC } from 'react'
import { NavLink, type NavLinkProps } from 'react-router-dom'
import { SVGSymbol } from 'shared/ui'

import s from './NavigationLink.module.scss'

interface NavigationLinksProps extends NavLinkProps {
  text: string
  icon: string
}

const NavigationLink: FC<NavigationLinksProps> = (props) => {
  const { text, icon, ...otherProps } = props

  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? `${s.link} ${s.link_active}` : s.link
      }
      {...otherProps}
    >
      {icon.length !== 0 && (
        <div className={s.container__icon}>
          <SVGSymbol name={icon} classNames={s.icon} />
        </div>
      )}
      {text}
    </NavLink>
  )
}

export default NavigationLink
