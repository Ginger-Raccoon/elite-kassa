import s from './DocumentsPageHeader.module.scss'
import { IconButton, SearchField } from '../../shared/ui'

export const DocumentsPageHeader = () => {
  return (
    <div className={s.container}>
      <div className={s.table__controls}>
        <SearchField />
        <IconButton iconName={'refresh'} className={s.refresh} />
      </div>
    </div>
  )
}
