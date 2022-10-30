import { useEffect, useState } from "react";

const TABLET = 768
const DESKTOP = 1024

export const useMedia = (minWidth: number) => {
  const [matches, setMatches] = useState(window.innerWidth >= minWidth)

  useEffect(()=> {
    const media = window.matchMedia(`(min-width: ${minWidth}px)`)
    const onChange = (e:any) => setMatches(e.matches)

    media.addEventListener('change', onChange)

    return ()=> {
      media.removeEventListener('change', onChange)
    }
  }, [minWidth])

  return matches
}

export const useTablet = () => {
 return useMedia(TABLET)
}

export const useDesktop = () => {
  return useMedia(DESKTOP)
}