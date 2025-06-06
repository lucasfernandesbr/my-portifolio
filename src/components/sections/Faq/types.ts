type FaqQuestion = {
  question: string
  answer: string
}

export type FaqContent = {
  id: string
  title: string
  questions: FaqQuestion[]
}

export type FaqProps = {
  content: FaqContent
}
