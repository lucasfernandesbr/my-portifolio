import { useEffect, useRef, useState } from 'react'

export default function useSectionReveal(threshold = 0.25) {
  const ref = useRef<HTMLElement | null>(null)
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [revealed, setRevealed] = useState(prefersReduced)

  useEffect(() => {
    if (prefersReduced) return
    const section = ref.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.unobserve(section)
        }
      },
      { threshold },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [threshold, prefersReduced])

  return { ref, revealed }
}
