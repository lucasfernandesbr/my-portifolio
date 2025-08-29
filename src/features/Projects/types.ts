import { ProjectCardProps as ProjectCard } from './ProjectCard/types'

export type ProjectsContent = {
  id: string
  title: string
  description: string
  items: ProjectCard[]
}

export type ProjectsProps = {
  content: ProjectsContent
}
