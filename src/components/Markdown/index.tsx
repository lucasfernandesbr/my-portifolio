import ReactMarkdown from 'react-markdown'
import DOMPurify from 'dompurify'
import rehypeRaw from 'rehype-raw'

export type MarkdownProps = {
  content: string
}

export default function Markdown({ content }: MarkdownProps) {
  const sanitizedContent = DOMPurify.sanitize(content)

  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
      {sanitizedContent}
    </ReactMarkdown>
  )
}
