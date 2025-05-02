import { IconName } from '@/components/shared/Molecules/Icon'

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
