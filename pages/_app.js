import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core'
import { StyledEngineProvider } from '@material-ui/core/styles'
import '../styles/globals.css'
import { theme } from '../styles/theme'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return <>
    <Head>      
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="apple-mobile-web-app-title" content="- kd photography" />
      <meta name="application-name" content="- kd photography" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <div style={{ padding: '8px' }}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  </>
}

export default MyApp
