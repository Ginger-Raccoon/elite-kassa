import { PageWrapper, Tables } from 'shared/ui'
import { PageHeader, DocumentsPageHeader } from 'widgets'
import { TableData } from '../../utills/TableData'

import s from './FirmsPage.module.scss'

export const FirmsPage = () => {
  return (
    <PageWrapper>
      <div className={s.container}>
        <PageHeader title={'Мои Фирмы'} />
        <DocumentsPageHeader />
        <Tables.FirmsTable data={TableData} />
      </div>
    </PageWrapper>
  )
}
