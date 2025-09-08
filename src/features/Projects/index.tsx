import Container from '@components/Container'
import Text from '@components/Text'

import ProjectCard from './ProjectCard'
import { ProjectsProps } from './types'

export default function Projects({ content }: ProjectsProps) {
  const { title, description, items } = content

  return (
    <Container>
      <div className="flex flex-1 justify-center">
        <div className="xs:pt-8 xs:pb-8 xs:gap-10 xs:max-w-[468px] flex w-full flex-col items-center lg:max-w-full lg:gap-20 lg:pt-20 lg:pb-20">
          <div className="border-gray-20 flex w-full flex-col items-center gap-12 border-b-1 pb-12">
            <h1 className="xs:text-4xl xs:text-center font-semibold lg:text-5xl">
              {title}
            </h1>

            <Text className="w-full max-w-[640px] text-center">
              {description}
            </Text>
          </div>

          {items.map(({ title, description, variant }) => (
            <ProjectCard
              title={title}
              description={description}
              {...(variant && { variant })}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}
