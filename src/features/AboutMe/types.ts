export type AboutMeContent = {
  id: string
  img: {
    key: string
    alt: string
  }
  title: string
  content: string
}

export type AboutMeProps = {
  content: AboutMeContent
}
