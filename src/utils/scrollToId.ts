export function scrollToId(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault()

  const element = document.getElementById(id)

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
