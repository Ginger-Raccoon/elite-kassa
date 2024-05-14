import { Logo } from 'shared/ui'
import { Navigation } from 'features'

import s from './SideBar.module.scss'

const SideBar = () => {
  return (
    <div className={s.container}>
      <Logo classname={s.logo_header} />
      <Navigation />
    </div>
  )
}

export default SideBar
