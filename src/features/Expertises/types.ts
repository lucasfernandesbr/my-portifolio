type Tech = {
  key: string
  alt: string
}

export type ExpertisesContent = {
  id: string
  title: string
  description: string
  techs: Tech[]
}

export type ExpertisesProps = {
  content: ExpertisesContent
}
