import { ThemeProvider } from '@material-ui/core'
import { StyledEngineProvider } from '@material-ui/core/styles'
import '../styles/globals.css'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return <div style={{ padding: '8px' }}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  </div>
}

export default MyApp
