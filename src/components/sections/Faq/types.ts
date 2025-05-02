type FaqQuestion = {
  question: string
  answer: string
}

export type FaqContent = {
  title: string
  questions: FaqQuestion[]
}

export type FaqProps = {
  content: FaqContent
}
