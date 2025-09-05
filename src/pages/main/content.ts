import { useTranslation } from 'react-i18next'
import type { TFunction } from 'i18next'

import { AboutMeContent } from '@features/AboutMe/types'
import { CuriositiesContent } from '@features/Curiosities/types'
import { ExpertisesContent } from '@features/Expertises/types'
import { HeroContent } from '@features/Hero/types'
import { IntroductionContent } from '@features/Introduction/types'
import { JourneysContent } from '@features/Journeys/types'
import { ProjectsContent } from '@features/Projects/types'

import { FooterContent } from '@components/Footer/types'
import { HeaderContent } from '@components/Header/types'

type Content = {
  header: HeaderContent
  hero: HeroContent
  introduction: IntroductionContent
  about_me: AboutMeContent
  expertises: ExpertisesContent
  journeys: JourneysContent
  projects: ProjectsContent
  curiosities: CuriositiesContent
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
    curiosities: getTranslation(t, 'curiosities') as CuriositiesContent,
    footer: getTranslation(t, 'footer') as FooterContent,
  }

  return content
}

export default useContent
