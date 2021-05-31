import React, { useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'

const dark = {
  global: {
    background: "#000",
    themeBackground: "#000",
    color: "#fff",
    themeColor: "#76cbff"
  }
}

const light = {
  global: {
    background: "#FFFFFF",
    themeBackground: "#fff8f9",
    color: "#212121",
    themeColor: "#ff3465"
  }
}

const CACHE_KEY = 'IS_DARK'

const ThemeContext = React.createContext({ isDark: null, toggleTheme: (isDark: boolean) => null })

const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const isDarkUserSetting = localStorage.getItem(CACHE_KEY)
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : false
  })

  const toggleTheme = (isDark) => {
    setIsDark(isDark)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={isDark ? dark : light}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
