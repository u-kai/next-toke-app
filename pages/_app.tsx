import React, { useEffect } from 'react'

import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import {
  StyledEngineProvider,
  ThemeProvider as MaterialUIThemeProvider,
} from '@mui/material'
import {CssBaseline} from '@mui/material'

import theme from '../src/theme/theme'

const MyApp = ({ Component, pageProps }): JSX.Element => {
  // Remove the server-side injected CSS.(https://material-ui.com/guides/server-rendering/)
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  return (
    <StyledEngineProvider injectFirst>
      <MaterialUIThemeProvider theme={theme}>
        <StyledComponentsThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </StyledComponentsThemeProvider>
      </MaterialUIThemeProvider>
    </StyledEngineProvider>
  )
}

export default MyApp