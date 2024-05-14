import { PageWrapper, Tables } from 'shared/ui'
import { PageHeader, ReceiptPageHeader } from 'widgets'

import { TableData } from '../../utills/TableData'

import s from './ReceiptPage.module.scss'

export const ReceiptPage = () => {
  return (
    <PageWrapper>
      <div className={s.container}>
        <PageHeader title={'Чеки'} />
        <div className={s.main}>
          <div>
            <ReceiptPageHeader />
            <Tables.ReceiptTable data={TableData} />
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
