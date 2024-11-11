import { Metadata } from 'next'
import Content from './content.mdx'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.krishnadubagunta.com'),
  title: 'Krishna Dubagunta (KD)',
  description: 'Portfolio of Krishna Dubagunta | Software Engineer | Landscape Photographer',
  icons: ['/favicon.ico'],

  openGraph: {
    title: 'Krishna Dubagunta (KD)',
    description: 'Portfolio of Krishna Dubagunta | Software Engineer | Landscape Photographer',
    url: 'https://www.krishnadubagunta.com',
    type: 'profile',
    gender: 'male',
    images: [
      {
        url: "https://krishnadubagunta.com/images/me.jpg",
        alt: 'Me near DUMBO in brooklyn just after snow',
        type: 'image/jpg'
      }
    ],
    firstName: 'Sai Krishna',
    lastName: 'Dubagunta'
  },

  twitter: {
    title: 'Krishna Dubagunta (KD)',
    description: 'Portfolio of Krishna Dubagunta | Software Engineer | Landscape Photographer',
    card: 'summary_large_image',
    creator: 'Krishna Dubagunta (KD)'
  },

  keywords: 'portfolio,software-engineer,photographer,landscape-photographer',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

export default async function Home() {
  return (
    <article className='pt-6 flex items-center'>
      <Content />
    </article>
  )
}
