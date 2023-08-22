import H3 from "kd-ui/ui/typography/h3";
import { CardImage } from "kd-ui/ui/card";
import CameraFilters from "./_lib/components/cameraFilters";
import Products from "./_lib/products";
import Link from "next/link";
import { Metadata } from "next";

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
        url: "https://krishnaduabgunta.com/images/me.avif",
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

function GalleryCard({ photo }: any) {
  return (
    <div className="">
      <Link href={`/gallery/${photo.sys.id}`}>
        <CardImage
          src={photo.asset.url}
          alt={photo.description || ""}
          title={photo.title}
          height={photo.asset.height}
          width={photo.asset.width}
          description={photo.description}
          price="150"
        />
      </Link>
    </div>
  );
}

export default async function Gallery({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const photos = await Products(
    (searchParams?.cameraType as string)?.split(",") || [],
    {
      revalidate: 10,
    }
  );
  return (
    <div className="pt-6 flex flex-col place-self-center w-10/12">
      <H3>gallery&nbsp;&nbsp;&nbsp;📸</H3>
      <div className="pt-4">
        <CameraFilters />
      </div>
      <div
        id="image-gallery"
        className="pt-6 flex flex-wrap space-x-4"
      >
        {photos.map((photo: any) => (
          <GalleryCard photo={photo} key={photo.sys.id} />
        ))}
      </div>
    </div>
  );
}
