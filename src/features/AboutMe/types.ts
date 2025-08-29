export type AboutMeContent = {
  id: string
  img: {
    src: string
    alt: string
  }
  title: string
  content: string
}

export type AboutMeProps = {
  content: AboutMeContent
}
