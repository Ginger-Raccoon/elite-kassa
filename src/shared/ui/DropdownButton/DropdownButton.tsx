import { Select, type SelectProps } from 'antd'

interface DropdownButtonProps extends SelectProps {}

export const DropdownButton = (props: DropdownButtonProps) => {
  return (
    <Select
      defaultValue={'export'}
      options={[
        {
          label: 'ЭКСПОРТ',
          value: 'export',
        },
      ]}
      defaultActiveFirstOption={true}
      {...props}
    ></Select>
  )
}
