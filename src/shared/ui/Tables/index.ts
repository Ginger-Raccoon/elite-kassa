import {
  DocumentsTable,
  type IDocuments,
} from './DocumentsTable/DocumentsTable'
import { FirmsTable, type IFirms } from './FirmsTable/FirmsTable'
import { ReceiptTable, type IReceipt } from './ReceiptTable/ReceiptTable'

const Tables = {
  DocumentsTable,
  FirmsTable,
  ReceiptTable,
}

export { Tables, type IDocuments, type IFirms, type IReceipt }
