import { IconName } from '@Atoms/Icon'

type introductionCard = {
  title?: string
  icon?: IconName
  content: string
}

export type IntroductionContent = {
  cards: introductionCard[]
}

export type IntroductionProps = {
  content: IntroductionContent
}
