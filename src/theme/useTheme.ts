import { useEffect, useState } from 'react'
import { setToLS, getFromLS } from '../utils/storage'
import _ from 'lodash'

export const useTheme = () => {
  const themes = getFromLS('all-themes')
  const [theme, setTheme] = useState(themes.data.light)
  const [themeLoaded, setThemeLoaded] = useState(false)

  const setMode = (mode) => {
    setToLS('theme', mode)
    setTheme(mode)
  }

  const getFonts = () => {
    const allFonts = _.values(_.mapValues(themes.data, 'font'))
    return allFonts
  }

  useEffect(() => {
    const localTheme = getFromLS('theme')
    if (localTheme) {
      setTheme(localTheme)
    } else {
      setTheme(themes.data.light)
    }
    setThemeLoaded(true)
  }, [themes.data.light])

  return { theme, themeLoaded, setMode, getFonts }
}
