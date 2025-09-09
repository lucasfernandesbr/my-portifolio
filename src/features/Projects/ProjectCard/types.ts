type Image = {
  key: string
  alt: string
}

export type ProjectCardProps = {
  title: string
  description: string
  img: Image
  variant?: 'inverted'
}
