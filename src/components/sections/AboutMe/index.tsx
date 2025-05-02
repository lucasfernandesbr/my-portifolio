import Container from '@Atoms/Container'
import Markdown from '@Atoms/Markdown'

import { AboutMeProps } from './types'

const AboutMe: React.FC<AboutMeProps> = ({ content }) => {
  const { title, content: about_me } = content

  return (
    <Container>
      <div className="flex w-full items-center justify-between pt-20 pb-20">
        <div className="bg-gray-30 h-[600px] w-[524px] rounded-lg" />

        <div className="flex w-[600px] flex-col justify-center gap-10">
          <h1 className="text-brand-black text-5xl font-semibold">{title}</h1>

          <div className="flex flex-col gap-6 text-justify">
            <Markdown content={about_me} />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AboutMe
