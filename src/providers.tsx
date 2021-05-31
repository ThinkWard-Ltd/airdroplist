import { ThemeContextProvider } from './contexts/themeContext'

export default ({ children }) => {
  return (
    <ThemeContextProvider>
      {children}
    </ThemeContextProvider>
  )
}

