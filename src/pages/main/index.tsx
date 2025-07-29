import React from 'react'

import Curiosities from '@/components/sections/Curiosities'
import Projects from '@/components/sections/Projects'

import AboutMe from '@sections/AboutMe'
import Expertises from '@sections/Expertises'
import Hero from '@sections/Hero'
import Introduction from '@sections/Introduction'
import Journeys from '@sections/Journeys'

import Footer from '@Molecules/Footer'
import Header from '@Organisms/Header'

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
