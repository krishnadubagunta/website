import TypographyH1 from "kd-ui/ui/typography/h1";
import VideoPlayer, { YoutubePlayer } from "../../_lib/components/VideoPlayer";
import TypographyP from "kd-ui/ui/typography/p";
import Image from "next/image";
import TypographyH3 from "kd-ui/ui/typography/h3";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.krishnadubagunta.com/marriage/live'),
  title: "Chidrupi & Krishna's Wedding Ceremony",
  description: "The live telecast of Chidrupi & KD's Wedding",
  icons: ['/favicon.ico'],

  openGraph: {
    title: "Chidrupi & Krishna's Wedding Ceremony",
    description: "The live telecast of Chidrupi & KD's Wedding",
    url: 'https://www.krishnadubagunta.com/marriage/live',
    type: 'video.other',
    locale: "en_IN",
    videos: [
      {
        url: "https://www.krishnadubagunta.com/marriage/live",
        secureUrl: "https://www.krishnadubagunta.com/marriage/live",
        type: "live"
      }
    ],
    images: [
      {
        url: "https://krishnadubagunta.com/images/wedding_og.jpeg",
        alt: 'Me near DUMBO in brooklyn just after snow',
        type: 'image/jpeg'
      }
    ],
  },

  keywords: 'wedding,indian-wedding,live'
}

export default async function MarriageLive() {
  const re = "https://www.youtube.com/live/Hx7WEFN72hM?si=HD7hjwdkwfYZCzbA";

  return (
    <div className="p-6">
      <div className="flex flex-col w-auto place-items-center">
        <TypographyH1 paris>Live</TypographyH1>
      </div>
      <YoutubePlayer url={re} />
    </div>
  );
}
