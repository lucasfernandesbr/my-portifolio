export type HeaderContent = {
  nav: Array<{ label: string }>
  flag: {
    src: string
    alt: string
  }
}

export type HeaderProps = {
  content: HeaderContent
}
