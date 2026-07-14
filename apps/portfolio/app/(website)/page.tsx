import { Metadata } from 'next'
import { db } from '@/db'
import Hero from './_components/hero'
import BioSocials from './_components/bio-socials'
import TopicCards from './_components/topic-cards'
import LatestPosts from './_components/latest-posts'

export const revalidate = 3600;

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
  const posts = await db.query.blogTable.findMany({
    orderBy: ({ pubDate, lastUpdated }, { desc }) => [desc(pubDate), desc(lastUpdated)],
    limit: 3,
  });

  return (
    <>
      <Hero />
      <BioSocials />
      <TopicCards />
      <LatestPosts posts={posts} />
    </>
  );
}
