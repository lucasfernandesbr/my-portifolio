import * as motion from 'motion/react-client'

import { fadeUpDelay } from '@lib/motion'

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
        className="flex flex-1 justify-center"
      >
        <div className="xs:pt-8 xs:pb-8 xs:max-w-[468px] flex w-full flex-col gap-12 lg:max-w-full lg:pt-20 lg:pb-20">
          <div className="flex flex-col items-center gap-10">
            <motion.h1
              variants={fadeUpDelay(0.2)}
              className="xs:text-4xl font-display text-5xl font-semibold tracking-tight text-balance"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={fadeUpDelay(0.4)}
              className="w-full max-w-[640px] text-center"
            >
              {description}
            </motion.p>
          </div>

          <div className="xs:flex-col border-border-ui flex border-t-1 lg:flex-row">
            <JourneyList
              kind="professional"
              icon={professional.icon}
              title={professional.title}
              list={professional.journey}
              button={professional.button}
            />

            <JourneyList
              kind="academic"
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
