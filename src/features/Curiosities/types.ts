import { CuriosityCardProps as CuriosityCard } from './CuriosityCard/types'

export type CuriositiesContent = {
  id: string
  title: string
  description: string
  items: CuriosityCard[]
}

export type CuriositiesProps = {
  content: CuriositiesContent
}
