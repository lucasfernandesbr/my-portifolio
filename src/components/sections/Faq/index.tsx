import Container from '@/components/shared/Atoms/Container'
import Text from '@/components/shared/Atoms/Text'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shared/Organisms/Accordion'

import { FaqProps } from './types'

const Faq: React.FC<FaqProps> = ({ content }) => {
  const { title, questions } = content

  return (
    <Container>
      <div className="flex w-full flex-col justify-between gap-10 pt-[80px] pb-[80px]">
        <h1 className="text-brand-black text-5xl font-semibold">{title}</h1>

        <div className="flex w-full flex-col gap-6">
          <div className="flex w-full flex-wrap justify-between gap-6">
            {questions.map(({ question, answer }) => (
              <Accordion type="single" collapsible className="w-[568px]">
                <AccordionItem className="w-[568px]" value="item-1">
                  <AccordionTrigger className="w-full">
                    <Text className="text-xl font-medium">{question}</Text>
                  </AccordionTrigger>
                  <AccordionContent className="w-full">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Faq
