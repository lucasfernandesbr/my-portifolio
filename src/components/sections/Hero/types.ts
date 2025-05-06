import { IconName } from '@Atoms/Icon'

type HeroButton = {
  label: string
  href: string
  icon?: IconName
}

type HeroAnchor = {
  href: string
  icon: IconName
}

type ReadyOnline = {
  avatar: {
    src: string
    alt: string
  }
  label: string
}

export type HeroContent = {
  id: string
  ready_online: ReadyOnline
  title: string
  buttons: {
    scroll_down: HeroButton
    socials: HeroAnchor[]
  }
}

export type HeroProps = {
  content: HeroContent
}
