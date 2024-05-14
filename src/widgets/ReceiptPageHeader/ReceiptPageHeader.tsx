import { DropdownButton, IconButton, SearchField } from 'shared/ui'

import s from './ReceiptPageHeader.module.scss'

export const ReceiptPageHeader = () => {
  return (
    <div className={s.container}>
      <div className={s.table__controls}>
        <IconButton iconName={'filter'} className={s.filter} />
        <SearchField />
      </div>
      <div className={s.data__controls}>
        <IconButton iconName={'refresh'} className={s.refresh} />
        <DropdownButton />
      </div>
    </div>
  )
}
