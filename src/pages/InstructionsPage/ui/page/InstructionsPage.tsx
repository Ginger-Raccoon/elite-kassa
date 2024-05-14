import { useState } from 'react'

import { Collapses, PageWrapper } from 'shared/ui'
import { PageHeader, InstructionsPageHeader } from 'widgets'
import s from './InstructionsPage.module.scss'
import {
  firstSections,
  secondSections,
  thirdSections,
} from '../../utills/Collapses'

export const InstructionsPage = () => {
  const [tab, setTab] = useState('section1')
  const TabsInfo = [
    {
      label: 'Раздел 1',
      value: 'section1',
    },
    {
      label: 'Раздел 2',
      value: 'section2',
    },
    {
      label: 'Раздел 3',
      value: 'section3',
    },
  ]
  const changeTab = (newValue: string) => {
    setTab(newValue)
  }

  return (
    <PageWrapper>
      <div className={s.container}>
        <PageHeader title={'Документы'} />
        <InstructionsPageHeader
          TabsInfo={TabsInfo}
          defaultValue={'section1'}
          onChange={changeTab}
        />
        <div className={s.collapses}>
          {tab === 'section1' && <Collapses options={firstSections} />}
          {tab === 'section2' && <Collapses options={secondSections} />}
          {tab === 'section3' && <Collapses options={thirdSections} />}
        </div>
      </div>
    </PageWrapper>
  )
}
