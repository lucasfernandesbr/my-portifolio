import Container from '@Atoms/Container'
import Text from '@Atoms/Text'

const Curiosities: React.FC = () => {
  return (
    <Container>
      <div className="flex w-full flex-col gap-14 pt-[80px] pb-[80px]">
        <div className="border-gray-30 flex flex-col items-center gap-12">
          <h1 className="text-brand-black text-5xl font-semibold">
            Curiosities About Myself
          </h1>

          <Text className="w-full max-w-[640px] text-center">
            i’m a Front-End Developer with over 3 years of experience,
            specializing in React and Next.js. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </Text>
        </div>

        <div className="flex justify-between">
          <div className="flex max-w-[408px] flex-col gap-8 p-12">
            <img
              src="/images/commons/dance_student.jpg"
              alt="travel"
              className="bg-brand-black h-[216px] rounded-lg object-cover"
            />

            <div className="flex flex-col gap-5">
              <h1 className="text-brand-black text-2xl font-semibold">
                Dance Student
              </h1>

              <Text>
                i’m a Front-End Developer with over 3 years of experience,
                specializing in React and Next.js. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
              </Text>
            </div>
          </div>

          <div className="bg-gray-20 flex max-w-[408px] flex-col gap-8 rounded-2xl p-12">
            <div className="bg-brand-black h-[216px] rounded-lg" />

            <div className="flex flex-col gap-5">
              <h1 className="text-brand-black text-2xl font-semibold">Gamer</h1>

              <Text>
                i’m a Front-End Developer with over 3 years of experience,
                specializing in React and Next.js. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
              </Text>
            </div>
          </div>

          <div className="flex max-w-[408px] flex-col gap-8 p-12">
            <img
              src="/images/commons/travel.jpg"
              alt="travel"
              className="bg-brand-black h-[216px] rounded-lg object-cover"
            />

            <div className="flex flex-col gap-5">
              <h1 className="text-brand-black text-2xl font-semibold">
                Travel Lover
              </h1>

              <Text>
                i’m a Front-End Developer with over 3 years of experience,
                specializing in React and Next.js. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Curiosities
