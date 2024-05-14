import s from './InstructionsPageHeader.module.scss'
import { SearchField, Tabs, type TabOption } from 'shared/ui'

interface InstructionsPageHeaderProps {
  TabsInfo: TabOption[]
  defaultValue: string
  onChange: (value: string) => void
}

export const InstructionsPageHeader = (props: InstructionsPageHeaderProps) => {
  const { TabsInfo, defaultValue, onChange } = props

  return (
    <div className={s.container}>
      <div className={s.table__controls}>
        <SearchField />
        <Tabs
          options={TabsInfo}
          defaultValue={defaultValue}
          onChange={onChange}
        />
      </div>
    </div>
  )
}
