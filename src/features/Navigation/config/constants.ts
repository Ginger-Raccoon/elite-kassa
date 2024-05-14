interface INavLinks {
  to: string
  text: string
  icon: string
}

const NavLinks: INavLinks[] = [
  {
    to: '/',
    text: 'Чеки',
    icon: 'receipt',
  },
  {
    to: '/my-companies',
    text: 'Мои Фирмы',
    icon: 'receipt',
  },
  {
    to: '/documents',
    text: 'Документы',
    icon: 'receipt',
  },
  {
    to: '/instructions',
    text: 'Инструкции',
    icon: 'receipt',
  },
]

export { NavLinks }
