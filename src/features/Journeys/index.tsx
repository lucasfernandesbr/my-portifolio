import * as motion from 'motion/react-client'

import useSectionReveal from '@hooks/useSectionReveal'

import Section from '@components/Section'

import JourneyList from './JourneyList'
import { JourneysProps } from './types'

export default function Journeys({ content }: JourneysProps) {
  const { ref, revealed } = useSectionReveal()

  const { id, title, description, professional, academic } = content

  const shouldShowSection = revealed ? 'show' : 'hidden'

  return (
    <Section ref={ref} id={id}>
      <motion.div
        initial="hidden"
        animate={shouldShowSection}
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: 'easeInOut', delay: 0.2 },
          },
        }}
        className="flex flex-1 justify-center"
      >
        <div className="xs:pt-8 xs:pb-8 xs:max-w-[468px] flex w-full flex-col gap-12 lg:max-w-full lg:pt-20 lg:pb-20">
          <div className="flex flex-col items-center gap-10">
            <h1 className="xs:text-4xl text-5xl font-semibold">{title}</h1>

            <p className="w-full max-w-[640px] text-center">{description}</p>
          </div>

          <div className="xs:flex-col border-gray-20 dark:border-gray-80 flex border-t-1 lg:flex-row">
            <JourneyList
              icon={professional.icon}
              title={professional.title}
              list={professional.journey}
              button={professional.button}
            />

            <JourneyList
              icon={academic.icon}
              title={academic.title}
              list={academic.journey}
              button={academic.button}
            />
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
