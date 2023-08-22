import { Metadata } from 'next'
import Content from './content.mdx'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.krishnadubagunta.com'),
  title: 'Krishna Dubagunta (KD)',
  description: 'Portfolio of Krishna Dubagunta | Software Engineer | Landscape Photographer',
  icons: ['/favicon.ico'],
  openGraph: {
    type: 'profile',
    gender: 'male',
    images: [
      {
        url: "http://localhost:3000/images/me.avif",
        alt: 'Me near DUMBO in brooklyn just after snow',
        type: 'image/avif'
      }
    ],
    firstName: 'Sai Krishna',
    lastName: 'Dubagunta'
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
  },
}

export default async function Home() {
  return (
    <div className='pt-6 flex items-center'>
      <Content />
    </div>
  )
}
