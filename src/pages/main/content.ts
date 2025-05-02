import { useTranslation } from 'react-i18next'

import { AboutMeContent } from '@sections/AboutMe/types'
import { ExpertisesContent } from '@sections/Expertises/types'
import { FaqContent } from '@sections/Faq/types'
import { HeroContent } from '@sections/Hero/types'
import { IntroductionContent } from '@sections/Introduction/types'
import { JourneysContent } from '@sections/Journeys/types'

import { FooterContent } from '@Molecules/Footer/types'
import { HeaderContent } from '@Organisms/Header/types'

type Content = {
  header: HeaderContent
  hero: HeroContent
  introduction: IntroductionContent
  about_me: AboutMeContent
  expertises: ExpertisesContent
  journeys: JourneysContent
  faq: FaqContent
  footer: FooterContent
}

const useContent = (): Content => {
  const { t } = useTranslation()

  const content = {
    header: t('header', { returnObjects: true }) as HeaderContent,
    hero: t('hero', { returnObjects: true }) as HeroContent,
    introduction: t('introduction', {
      returnObjects: true,
    }) as IntroductionContent,
    about_me: t('about_me', { returnObjects: true }) as AboutMeContent,
    expertises: t('expertises', { returnObjects: true }) as ExpertisesContent,
    journeys: t('journeys', { returnObjects: true }) as JourneysContent,
    faq: t('faq', { returnObjects: true }) as FaqContent,
    footer: t('footer', { returnObjects: true }) as FooterContent,
  }

  return content
}

export default useContent
