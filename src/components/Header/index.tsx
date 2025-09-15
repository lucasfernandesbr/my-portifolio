import Desktop from './Desktop'
import Mobile from './Mobile'
import { HeaderProps } from './types'

export default function Header({ content }: HeaderProps) {
  return (
    <>
      <Mobile content={content} />
      <Desktop content={content} />
    </>
  )
}
