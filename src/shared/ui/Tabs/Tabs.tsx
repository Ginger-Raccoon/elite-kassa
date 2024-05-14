import { useState } from 'react'
import { Tab } from '../Tab/Tab'

import s from './Tabs.module.scss'

export interface TabOption {
  label: string
  value: string
  disabled?: boolean
}

interface TabsProps {
  options: TabOption[]
  defaultValue: string
  onChange: (value: string) => void
}

export const Tabs = (props: TabsProps) => {
  const { defaultValue, onChange, options } = props

  const [value, setValue] = useState<string>(defaultValue)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setValue(newValue)
    onChange(newValue)
  }

  return (
    <div className={s.tabs}>
      {options.map((option) => (
        <Tab
          key={option.value}
          value={option.value}
          checked={value === option.value}
          onChange={handleChange}
          label={option.label}
          disabled={option.disabled ?? false}
        />
      ))}
    </div>
  )
}
