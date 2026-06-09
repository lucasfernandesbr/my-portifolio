import * as motion from 'motion/react-client'

import { fadeUp, fadeUpDelay, staggerContainerSlow } from '@lib/motion'

import useSectionReveal from '@hooks/useSectionReveal'

import Section from '@components/Section'

import CuriosityCard from './CuriosityCard'
import { CuriositiesProps } from './types'

export default function Curiosities({ content }: CuriositiesProps) {
  const { ref, revealed } = useSectionReveal()

  const { id, title, description, items } = content

  return (
    <Section ref={ref} id={id}>
      <div className="flex flex-1 justify-center">
        <motion.div
          initial="hidden"
          animate={revealed ? 'show' : 'hidden'}
          className="xs:pt-8 xs:pb-8 xs:gap-10 xs:max-w-[468px] xs:items-center flex w-full flex-col lg:max-w-full lg:gap-14 lg:pt-20 lg:pb-20"
        >
          <div className="flex flex-col items-center gap-7">
            <motion.h1
              variants={fadeUpDelay(0.2)}
              className="xs:text-4xl xs:text-center font-display font-semibold tracking-tight text-balance lg:text-left lg:text-5xl"
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

          <motion.ul
            initial="hidden"
            animate={revealed ? 'show' : 'hidden'}
            variants={staggerContainerSlow}
            className="xs:flex-col flex w-full items-center justify-between gap-10 lg:flex-row"
          >
            {items.map(({ title, description, image }) => (
              <motion.li variants={fadeUp} key={title}>
                <CuriosityCard
                  title={title}
                  description={description}
                  image={image}
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </Section>
  )
}
