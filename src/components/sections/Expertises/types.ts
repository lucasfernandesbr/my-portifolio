type Tech = {
  src: string
  alt: string
}

export type ExpertisesContent = {
  title: string
  description: string
  techs: Tech[]
}

export type ExpertisesProps = {
  content: ExpertisesContent
}
