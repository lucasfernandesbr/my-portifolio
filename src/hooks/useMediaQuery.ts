import { useEffect, useState } from 'react'

export default function useMediaQuery(minWidth: number) {
  const query = `(min-width: ${minWidth}px)`
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    const updateMatch = () => setMatches(media.matches)

    updateMatch()
    media.addEventListener('change', updateMatch)
    return () => media.removeEventListener('change', updateMatch)
  }, [query])

  return matches
}
