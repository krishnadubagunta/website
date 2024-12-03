import { Metadata } from 'next'
import Content from './content.mdx'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.krishnadubagunta.com'),
  title: {
    default: "Krishna Dubagunta (KD)",
    template: "%s | Krishna Dubagunta",
  },
  description: 'Portfolio of Krishna Dubagunta | Software Engineer | Landscape Photographer',
  icons: [
    {
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
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
    <article className='container max-w-4xl py-6 lg:py-10'>
      <Content />
    </article>
  )
}
