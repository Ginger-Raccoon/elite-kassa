import cn from 'classnames'

import s from './Tab.module.scss'

interface TabProps {
  value: string
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  disabled: boolean
}

export const Tab = (props: TabProps) => {
  const { value, label, checked, onChange, disabled = false } = props
  return (
    <label
      className={cn(
        s.label,
        checked && s.label_checked,
        disabled && s.label_disabled,
      )}
    >
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        className={s.input}
        disabled={disabled}
      />
      {label}
    </label>
  )
}
