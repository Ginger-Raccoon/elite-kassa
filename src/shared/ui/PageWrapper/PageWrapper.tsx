import { SideBar } from 'widgets'
import { type FC } from 'react'
import s from './PageWrapper.module.scss'

const PageWrapper: FC = ({ children }) => {
  return (
    <div className={s.container}>
      <SideBar />
      <div className={s.content}>{children}</div>
    </div>
  )
}

export default PageWrapper
