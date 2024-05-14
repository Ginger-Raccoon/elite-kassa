import cn from 'classnames'

import { projectName } from 'shared/constants'

import s from './Logo.module.scss'

interface ILogo {
  classname: string
}

const Logo = (props: ILogo) => {
  const { classname } = props
  return (
    <div className={cn(s.logo, classname)}>
      <p>{projectName}</p>
    </div>
  )
}

export default Logo
