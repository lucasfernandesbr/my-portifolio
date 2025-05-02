import React from 'react'

import AboutMe from '@/components/sections/AboutMe'
import Expertises from '@/components/sections/Expertises'
import Faq from '@/components/sections/Faq'
import Hero from '@/components/sections/Hero'
import Introduction from '@/components/sections/Introduction'
import Journeys from '@/components/sections/Journeys'
import Footer from '@/components/shared/Organisms/Footer'
import Header from '@/components/shared/Organisms/Header'

import useContent from './content'

const Main: React.FC = () => {
  const {
    header,
    hero,
    introduction,
    about_me,
    expertises,
    journeys,
    faq,
    footer,
  } = useContent()

  return (
    <div className="flex size-full flex-col justify-center align-middle">
      <Header content={header} />
      <Hero content={hero} />
      <Introduction content={introduction} />
      <AboutMe content={about_me} />
      <Expertises content={expertises} />
      <Journeys content={journeys} />
      <Faq content={faq} />
      <Footer content={footer} />
    </div>
  )
}

export default Main
