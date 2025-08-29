import React from 'react'

import AboutMe from '@features/AboutMe'
import Curiosities from '@features/Curiosities'
import Expertises from '@features/Expertises'
import Hero from '@features/Hero'
import Introduction from '@features/Introduction'
import Journeys from '@features/Journeys'
import Projects from '@features/Projects'

import Footer from '@components/Footer'
import Header from '@components/Header'

import useContent from './content'

const Main: React.FC = () => {
  const {
    header,
    hero,
    introduction,
    about_me,
    expertises,
    journeys,
    projects,
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
      <Projects content={projects} />
      <Curiosities />
      <Footer content={footer} />
    </div>
  )
}

export default Main
