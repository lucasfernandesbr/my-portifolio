import { IconName } from '../../Molecules/Icon'

type FooterAnchor = {
  href: string
  icon: IconName
}

export type FooterContent = {
  nav: Array<{ label: string }>
  socials: FooterAnchor[]
  copyright: string
}

export type FooterProps = {
  content: FooterContent
}
