import Container from '@Atoms/Container'
import Text from '@Atoms/Text'

import ProjectCard from './ProjectCard'
import { ProjectsProps } from './types'

const Projects: React.FC<ProjectsProps> = ({ content }) => {
  const { title, description, items } = content

  return (
    <Container>
      <div className="flex w-full flex-col gap-20 pt-[80px] pb-[80px]">
        <div className="border-gray-30 flex flex-col items-center gap-12 border-b-1 pb-12">
          <h1 className="text-brand-black text-5xl font-semibold">{title}</h1>

          <Text className="w-full max-w-[640px] text-center">
            {description}
          </Text>
        </div>

        {items.map(({ title, description, variant, inverted }) => (
          <ProjectCard
            title={title}
            description={description}
            {...(variant && { variant })}
            {...(inverted && { inverted })}
          />
        ))}
      </div>
    </Container>
  )
}

export default Projects
