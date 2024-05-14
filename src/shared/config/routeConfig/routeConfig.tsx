import { type RouteProps } from 'react-router-dom'
import { ReceiptPage, DocumentsPage, InstructionsPage, FirmsPage } from 'pages'

export enum AppRoutes {
  RECEIPT = 'receipt',
  COMPANIES = 'companies',
  DOCUMENTS = 'documents',
  INSTRUCTIONS = 'instructions',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.RECEIPT]: '/',
  [AppRoutes.COMPANIES]: '/my-companies',
  [AppRoutes.DOCUMENTS]: '/documents',
  [AppRoutes.INSTRUCTIONS]: '/instructions',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.RECEIPT]: {
    path: RoutePath.receipt,
    element: <ReceiptPage />,
  },
  [AppRoutes.COMPANIES]: {
    path: RoutePath.companies,
    element: <FirmsPage />,
  },
  [AppRoutes.DOCUMENTS]: {
    path: RoutePath.documents,
    element: <DocumentsPage />,
  },
  [AppRoutes.INSTRUCTIONS]: {
    path: RoutePath.instructions,
    element: <InstructionsPage />,
  },
}
