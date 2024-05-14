import { PageWrapper, Tables } from 'shared/ui'
import { PageHeader, DocumentsPageHeader } from 'widgets'
import { TableData } from '../../utills/TableData'

import s from './DocumentsPage.module.scss'

export const DocumentsPage = () => {
  return (
    <PageWrapper>
      <div className={s.container}>
        <PageHeader title={'Документы'} />
        <DocumentsPageHeader />
        <Tables.DocumentsTable data={TableData} />
      </div>
    </PageWrapper>
  )
}
