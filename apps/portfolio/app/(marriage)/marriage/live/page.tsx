import TypographyH1 from "kd-ui/ui/typography/h1";
import VideoPlayer, { YoutubePlayer } from "../../_lib/components/VideoPlayer";
import { kv } from "@vercel/kv";
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
  keywords: 'wedding,indian-wedding,live',
}

export default async function MarriageLive() {
  const re = await kv.get("liveLink") as string;
  const now = new Date(Date.now())

  if (!re || now.toLocaleString("en-US") < "11/9/2023, 10:00:00") {
    return (
      <div className="p-6 h-screen">
        <div className="flex flex-col h-full items-center grow">
          <TypographyH1 paris>Live</TypographyH1>
          <div className="flex flex-col w-full md:w-7/12 lg:10/12 h-full place-items-start md:place-items-center justify-center space-y-10">
            <TypographyP>
                We know you&apos;re excited to watch our live, but the wedding hasn&apos;t started yet. If you haven&apos;t added our event to your calendar yet.
            </TypographyP>
            <a
              className="w-64"
              target="_blank"
              href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MzMyYXExYjJxNWNsc2hjb243dXBsMXQ1cmsgZHViYWd1bnRhLnNhaWtyaXNobmFAbQ&amp;tmsrc=dubagunta.saikrishna%40gmail.com"
            >
              <div className="flex w-full justify-center place-content-between space-x-4">
                <TypographyH3 paris className="text-center">
                  Save the date
                </TypographyH3>
                <Image
                  alt="google calendar button logo"
                  src="https://fonts.gstatic.com/s/i/productlogos/calendar_2020q4/v13/web-64dp/logo_calendar_2020q4_color_2x_web_64dp.png"
                  width={32}
                  height={32}
                />
              </div>
            </a>
            <VideoPlayer loop url="/videos/videoinvite.mp4" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex flex-col w-auto place-items-center">
        <TypographyH1 paris>Live</TypographyH1>
      </div>
      <YoutubePlayer url={re} />
    </div>
  );
}
