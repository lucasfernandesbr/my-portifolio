import { IconName } from '@components/Icon'

type introductionCard = {
  content: string
  title?: string
  icon?: IconName
}

export type IntroductionContent = {
  id: string
  cards: introductionCard[]
}

export type IntroductionProps = {
  content: IntroductionContent
}
