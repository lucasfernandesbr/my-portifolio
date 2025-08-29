import useMediaQuery from '@hooks/useMediaQuery'

import Desktop from './Desktop'
import Mobile from './Mobile'
import { HeaderProps } from './types'

export default function Header({ content }: HeaderProps) {
  const isDesktop = useMediaQuery(1024)

  return isDesktop ? (
    <Desktop content={content} />
  ) : (
    <Mobile content={content} />
  )
}
