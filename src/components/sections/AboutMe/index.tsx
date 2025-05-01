import Container from '@/components/shared/Atoms/Container'
import Text from '@/components/shared/Atoms/Text'

const AboutMe: React.FC = () => {
  return (
    <Container>
      <div className="flex w-full items-center justify-between pt-20 pb-20">
        <div className="bg-gray-30 h-[600px] w-[524px] rounded-lg" />

        <div className="flex w-[600px] flex-col justify-center gap-10">
          <h1 className="text-brand-black text-5xl font-semibold">
            A Bit About Me
          </h1>

          <div className="flex flex-col gap-6 text-justify">
            <Text>
              i’m a Front-End Developer with over 3 years of experience,
              specializing in React and Next.js. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </Text>

            <Text>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>

            <Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </Text>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AboutMe
