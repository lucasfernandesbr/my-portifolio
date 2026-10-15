import * as motion from 'motion/react-client'

import {
  fadeLeft,
  fadeRight,
  fadeUpDelay,
  staggerContainerSlow,
} from '@lib/motion'

import useSectionReveal from '@hooks/useSectionReveal'

import Section from '@components/Section'

import ProjectCard from './ProjectCard'
import { ProjectsProps } from './types'

export default function Projects({ content }: ProjectsProps) {
  const { ref, revealed } = useSectionReveal()

  const { id, title, description, items } = content

  const shouldShowSection = revealed ? 'show' : 'hidden'

  return (
    <Section ref={ref} id={id}>
      <div className="flex flex-1 justify-center">
        <div className="xs:pt-8 xs:pb-8 xs:max-w-[468px] xs:gap-10 flex w-full flex-col items-center justify-center lg:max-w-full lg:gap-20 lg:pt-20 lg:pb-20">
          <motion.div
            initial="hidden"
            animate={shouldShowSection}
            variants={fadeLeft}
            className="border-border-ui flex w-full flex-col items-center gap-12 border-b-1 pb-12"
          >
            <motion.h1
              variants={fadeUpDelay(0.2)}
              className="xs:text-4xl xs:text-center font-display font-semibold tracking-tight text-balance lg:text-5xl"
            >
              {title}
            </motion.h1>

            <motion.p
              initial="hidden"
              animate={shouldShowSection}
              variants={fadeUpDelay(0.4)}
              className="w-full max-w-[640px] text-center"
            >
              {description}
            </motion.p>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate={shouldShowSection}
            variants={staggerContainerSlow}
            className="xs:gap-10 flex flex-col lg:gap-20"
          >
            {items.map(
              ({ title, description, img, variant, tags, links }, index) => (
                <motion.li
                  key={title}
                  initial="hidden"
                  animate={shouldShowSection}
                  variants={index % 2 === 0 ? fadeLeft : fadeRight}
                >
                  <ProjectCard
                    title={title}
                    description={description}
                    img={img}
                    {...(variant && { variant })}
                    {...(tags && { tags })}
                    {...(links && { links })}
                  />
                </motion.li>
              ),
            )}
          </motion.ul>
        </div>
      </div>
    </Section>
  )
}
