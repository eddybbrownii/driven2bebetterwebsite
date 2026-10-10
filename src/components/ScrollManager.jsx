import { useEffect } from 'react'
import { useLocation } from 'react-router'

// When the page changes, start at the top, or jump to a #section
// (like /#story or /#assessment) if the link points to one.
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}
