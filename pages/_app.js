import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<>
    <Head>
      <title>Sai Krishna Dubagunta</title>
    </Head>
    <div className='h-auto'>
      <Component {...pageProps} key={router.route} />
    </div>
  </>)
}

export default MyApp
