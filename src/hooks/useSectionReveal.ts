import { useEffect, useRef, useState } from 'react'

export default function useSectionReveal(threshold = 0.2) {
  const ref = useRef<HTMLElement | null>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const section = ref.current
    if (!section) return

    let lastScrollY = window.scrollY

    const checkVisibility = () => {
      if (!section) return
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const elementHeight = rect.height
      const visibleHeight =
        Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top)
      const enoughVisible = visibleHeight >= elementHeight * 0.25

      const enteringFromTop =
        rect.top < windowHeight &&
        rect.bottom > 0 &&
        window.scrollY > lastScrollY &&
        enoughVisible

      const alreadyAbove = rect.bottom < 0
      const fullyInView = enoughVisible

      if (!revealed && (enteringFromTop || alreadyAbove || fullyInView)) {
        setRevealed(true)
        window.removeEventListener('scroll', checkVisibility)
      }

      lastScrollY = window.scrollY
    }

    window.addEventListener('scroll', checkVisibility)
    checkVisibility()

    return () => window.removeEventListener('scroll', checkVisibility)
  }, [threshold, revealed])

  return { ref, revealed }
}
