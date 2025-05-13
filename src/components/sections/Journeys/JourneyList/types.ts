import { IconName } from '@Atoms/Icon'

export type JourneyButton = {
  label: string
  icon: IconName
}

export type JourneyList = {
  institution: string
  location_time: string
  qualification: string
}

export type JourneyListProps = {
  icon: IconName
  title: string
  list: JourneyList[]
  button: JourneyButton
}
