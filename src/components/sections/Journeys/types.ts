import { IconName } from '@Atoms/Icon'

type JourneyButton = {
  label: string
  icon: IconName
}

type AcademicProfessional = {
  company_name: string
  description: string
  position: string
}

type AcademicJourney = {
  college: string
  description: string
  degree: string
}

export type JourneysContent = {
  id: string
  title: string
  description: string
  button: JourneyButton
  professional: {
    title: string
    icon: IconName
    journey: AcademicProfessional[]
  }
  academic: {
    title: string
    icon: IconName
    journey: AcademicJourney[]
  }
}

export type JourneysProps = {
  content: JourneysContent
}
