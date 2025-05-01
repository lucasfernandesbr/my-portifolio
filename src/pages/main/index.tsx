import React from 'react'

import AboutMe from '@/components/sections/AboutMe'
import Expertises from '@/components/sections/Expertises'
import Faq from '@/components/sections/Faq'
import Hero from '@/components/sections/Hero'
import Introduction from '@/components/sections/Introduction'
import Journeys from '@/components/sections/Journeys'
import Footer from '@/components/shared/Organisms/Footer'
import Header from '@/components/shared/Organisms/Header'

const Main: React.FC = () => {
  return (
    <div className="flex size-full flex-col justify-center align-middle">
      <Header />
      <Hero />
      <Introduction />
      <AboutMe />
      <Expertises />
      <Journeys />
      <Faq />
      <Footer />
    </div>
  )
}

export default Main
