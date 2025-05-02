import ReactMarkdown from 'react-markdown'
import DOMPurify from 'dompurify'
import rehypeRaw from 'rehype-raw'

export type MarkdownProps = {
  content: string
}

const Markdown = ({ content }: MarkdownProps) => {
  const sanitizedContent = DOMPurify.sanitize(content)

  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
      {sanitizedContent}
    </ReactMarkdown>
  )
}

export default Markdown
