import { ThemeProvider } from '@material-ui/core'
import { StyledEngineProvider } from '@material-ui/core/styles'
import '../styles/globals.css'
import { theme } from '../styles/theme'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return <div style={{ padding: '8px' }}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
    </StyledEngineProvider>
  </div>
}

export default MyApp
