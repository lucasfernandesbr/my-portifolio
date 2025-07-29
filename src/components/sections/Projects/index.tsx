import Container from '@Atoms/Container'
import Text from '@Atoms/Text'

import ProjectCard from './ProjectCard'

const Projects: React.FC = () => {
  return (
    <Container>
      <div className="flex w-full flex-col gap-20 pt-[80px] pb-[80px]">
        <div className="border-gray-30 flex flex-col items-center gap-12 border-b-1 pb-12">
          <h1 className="text-brand-black text-5xl font-semibold">
            A Few Projects That I’ve Worked
          </h1>

          <Text className="w-full max-w-[640px] text-center">
            i’m a Front-End Developer with over 3 years of experience,
            specializing in React and Next.js. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </Text>
        </div>

        <ProjectCard
          title="Project 1"
          description="i’m a Front-End Developer with over 3 years of experience,
              specializing in React and Next.js. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s."
        />

        <ProjectCard
          title="Project 2"
          description="i’m a Front-End Developer with over 3 years of experience,
              specializing in React and Next.js. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s."
          variant="withBackground"
          inverted
        />

        <ProjectCard
          title="Project 3"
          description="i’m a Front-End Developer with over 3 years of experience,
              specializing in React and Next.js. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s."
        />
      </div>
    </Container>
  )
}

export default Projects
