import { IconName } from '@Atoms/Icon'

type HeroButton = {
  label: string
  icon?: IconName
}

type HeroAnchor = {
  href: string
  icon: IconName
}

export type HeroContent = {
  ready_online: {
    label: string
  }
  title: string
  buttons: {
    scroll_down: HeroButton
    socials: HeroAnchor[]
  }
}

export type HeroProps = {
  content: HeroContent
}
