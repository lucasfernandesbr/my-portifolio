import * as motion from 'motion/react-client'

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
        <div className="xs:pt-8 xs:pb-8 xs:gap-10 xs:max-w-[468px] flex w-full flex-col items-center lg:max-w-full lg:gap-20 lg:pt-20 lg:pb-20">
          <motion.div
            initial="hidden"
            animate={shouldShowSection}
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.3, ease: 'easeInOut', delay: 0.2 },
              },
            }}
            className="border-gray-20 dark:border-gray-80 flex w-full flex-col items-center gap-12 border-b-1 pb-12"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3, ease: 'easeInOut', delay: 0.2 },
                },
              }}
              className="xs:text-4xl xs:text-center font-semibold lg:text-5xl"
            >
              {title}
            </motion.h1>

            <motion.p
              initial="hidden"
              animate={shouldShowSection}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3, ease: 'easeInOut', delay: 0.4 },
                },
              }}
              className="w-full max-w-[640px] text-center"
            >
              {description}
            </motion.p>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate={shouldShowSection}
            variants={{
              show: { transition: { staggerChildren: 0.2 } },
            }}
            className="xs:gap-10 flex flex-col lg:gap-20"
          >
            {items.map(({ title, description, img, variant }, index) => (
              <motion.li
                initial="hidden"
                animate={shouldShowSection}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.4, ease: 'easeInOut' },
                  },
                }}
              >
                <ProjectCard
                  title={title}
                  description={description}
                  img={img}
                  {...(variant && { variant })}
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </Section>
  )
}
