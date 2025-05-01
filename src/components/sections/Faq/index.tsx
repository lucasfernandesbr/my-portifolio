import Container from '@/components/shared/Atoms/Container'
import Text from '@/components/shared/Atoms/Text'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shared/Organisms/Accordion'

const Faq: React.FC = () => {
  return (
    <Container>
      <div className="flex w-full flex-col justify-between gap-10 pt-[80px] pb-[80px]">
        <h1 className="text-brand-black text-5xl font-semibold">
          A Few Questions About Me
        </h1>

        <div className="flex w-full flex-col gap-6">
          <div className="flex w-full flex-wrap justify-between gap-6">
            <Accordion type="single" collapsible className="w-[568px]">
              <AccordionItem className="w-[568px]" value="item-1">
                <AccordionTrigger className="w-full">
                  <Text className="text-xl font-medium">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Text>
                </AccordionTrigger>
                <AccordionContent className="w-full">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="w-[568px]">
              <AccordionItem className="w-[568px]" value="item-2">
                <AccordionTrigger>
                  <Text className="text-xl font-medium">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Text>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="w-[568px]">
              <AccordionItem className="w-[568px]" value="item-3">
                <AccordionTrigger>
                  <Text className="text-xl font-medium">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Text>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="w-[568px]">
              <AccordionItem className="w-[568px]" value="item-4">
                <AccordionTrigger>
                  <Text className="text-xl font-medium">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Text>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="w-[568px]">
              <AccordionItem className="" value="item-5">
                <AccordionTrigger>
                  <Text className="text-xl font-medium">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Text>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Faq
