import { IconName } from '@/components/shared/Molecules/Icon'

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
  title: string
  description: string
  button: JourneyButton
  professional: {
    title: string
    journey: AcademicProfessional[]
  }
  academic: {
    title: string
    journey: AcademicJourney[]
  }
}

export type JourneysProps = {
  content: JourneysContent
}
