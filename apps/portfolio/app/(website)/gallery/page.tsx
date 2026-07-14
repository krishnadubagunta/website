import H3 from "kd-ui/ui/typography/h3";
import Products from "./_lib/products";
import { Metadata } from "next";
import GalleryCard from "./_components/gallery-card";

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
        url: "https://krishnadubagunta.com/images/me.avif",
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
  }
}

export default async function Gallery() {
  const photos = await Products([], {
    revalidate: 10,
  });
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <H3 kaisei>gallery&nbsp;&nbsp;&nbsp;📸</H3>
      <div id="image-gallery" className="columns-2 gap-4 pt-10 sm:gap-6 md:columns-3">
        {photos.map((photo: any) => (
          <GalleryCard photo={photo} key={photo.sys.id} />
        ))}
      </div>
    </div>
  );
}
