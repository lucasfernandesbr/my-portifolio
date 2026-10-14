import { IconName } from '@components/Icon'

export type JourneyButton = {
  label: string
  icon: IconName
}

export type JourneyList = {
  institution: string
  location_time: string
  qualification: string
  specialization: string
  description?: string
  stack: string[]
  current?: boolean
}

export type JourneyKind = 'professional' | 'academic'

export type JourneyListProps = {
  kind: JourneyKind
  icon: IconName
  title: string
  list: JourneyList[]
  button: JourneyButton
}
