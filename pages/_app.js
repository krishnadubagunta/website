import Head from 'next/head'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import '../styles/globals.css'
import { theme } from '../styles/theme'
import { AnimateSharedLayout } from 'framer-motion'
import Container from '@mui/material/Container'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps, router }) {
  return <>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="apple-mobile-web-app-title" content="- kd photography" />
      <meta name="application-name" content="- kd photography" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <title>Sai Krishna Dubagunta</title>
    </Head>
    <div style={{ padding: 8 }}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <div className='flex justify-center my-2 bg-white'>
            <div className='w-11/12 z-50'>
              <Navbar />
            </div>
          </div>
          <div className='h-auto'>
            <AnimateSharedLayout initial={false} exitBeforeEnter>
              <Component {...pageProps} key={router.route} />
            </AnimateSharedLayout>
          </div>
          <Footer />
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  </>
}

export default MyApp
