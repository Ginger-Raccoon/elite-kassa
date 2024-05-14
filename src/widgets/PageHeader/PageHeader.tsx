import { Clock, MessageAlert, Balance, ProfileButton } from 'features'

import s from './PageHeader.module.scss'
import { Button } from '../../shared/ui'

interface PageHeaderProps {
  title: string
}

export const PageHeader = (props: PageHeaderProps) => {
  const { title } = props
  return (
    <div className={s.container}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.info}>
        <Clock />
        <div className={s.separator} />
        <MessageAlert />
        <div className={s.separator} />
        <Button
          withoutStyles
          text={'Связаться с нами'}
          classNames={s.contact}
        />
        <div className={s.separator} />
        <Balance />
        <div className={s.separator} />
        <ProfileButton />
      </div>
    </div>
  )
}
