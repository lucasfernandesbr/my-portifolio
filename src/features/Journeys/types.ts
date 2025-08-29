import { IconName } from '@components/Icon'

import { JourneyButton, JourneyList } from './JourneyList/types'

export type JourneysContent = {
  id: string
  title: string
  description: string
  professional: {
    title: string
    icon: IconName
    button: JourneyButton
    journey: JourneyList[]
  }
  academic: {
    title: string
    icon: IconName
    button: JourneyButton
    journey: JourneyList[]
  }
}

export type JourneysProps = {
  content: JourneysContent
}
