import { useTranslation } from 'react-i18next'
import type { TFunction } from 'i18next'

import { AboutMeContent } from '@sections/AboutMe/types'
import { ExpertisesContent } from '@sections/Expertises/types'
import { HeroContent } from '@sections/Hero/types'
import { IntroductionContent } from '@sections/Introduction/types'
import { JourneysContent } from '@sections/Journeys/types'
import { ProjectsContent } from '@sections/Projects/types'

import { FooterContent } from '@Molecules/Footer/types'
import { HeaderContent } from '@Organisms/Header/types'

type Content = {
  header: HeaderContent
  hero: HeroContent
  introduction: IntroductionContent
  about_me: AboutMeContent
  expertises: ExpertisesContent
  journeys: JourneysContent
  projects: ProjectsContent
  footer: FooterContent
}

function getTranslation(t: TFunction<'translation', undefined>, key: string) {
  return t(key, { returnObjects: true })
}

const useContent = (): Content => {
  const { t } = useTranslation()

  const content = {
    header: getTranslation(t, 'header') as HeaderContent,
    hero: getTranslation(t, 'hero') as HeroContent,
    introduction: getTranslation(t, 'introduction') as IntroductionContent,
    about_me: getTranslation(t, 'about_me') as AboutMeContent,
    expertises: getTranslation(t, 'expertises') as ExpertisesContent,
    journeys: getTranslation(t, 'journeys') as JourneysContent,
    projects: getTranslation(t, 'projects') as ProjectsContent,
    footer: getTranslation(t, 'footer') as FooterContent,
  }

  return content
}

export default useContent
