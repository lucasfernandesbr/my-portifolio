type Image = {
  key: string
  alt: string
}

type ProjectLink = {
  label: string
  href: string
  icon?: string
}

export type ProjectCardProps = {
  title: string
  description: string
  img: Image
  variant?: 'inverted'
  tags?: string[]
  links?: ProjectLink[]
}
