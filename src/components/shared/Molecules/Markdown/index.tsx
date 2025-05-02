import DOMPurify from 'dompurify'
import ReactMarkdown from 'react-markdown'
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
