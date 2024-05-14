import s from './ProfileButton.module.scss'
import { IconButton } from '../../shared/ui'

export const ProfileButton = () => {
  return (
    <div className={s.container}>
      <IconButton iconName={'avatar'} />
    </div>
  )
}
