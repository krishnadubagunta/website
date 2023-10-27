/* eslint @next/next/no-img-element: 0 */
import TypographyH1 from "kd-ui/ui/typography/h1";
import { YoutubePlayer } from "../../_lib/components/VideoPlayer";
import { kv } from "@vercel/kv";
import TypographyP from "kd-ui/ui/typography/p";
import TypographyH3 from "kd-ui/ui/typography/h3";
import TypographyH2 from "kd-ui/ui/typography/h2";

export default async function MarriageLive() {
  const re = await kv.get("liveLink");
  if (!re) {
    return (
      <div className="p-6 h-screen">
        <div className="flex flex-col h-full place-items-center">
          <TypographyH1 paris>Live</TypographyH1>
          <div className="flex flex-col w-full md:w-6/12 lg:8/12 h-full place-items-center justify-center space-y-10">
            <TypographyP>
              <span>
                We know you&apos;re excited to watch our live, but the wedding
                hasn&apos;t started yet. If you haven&apos;t added our event to your
                calendar yet.
              </span>
            </TypographyP>
            <a
              className="w-52"
              target="_blank"
              href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MzMyYXExYjJxNWNsc2hjb243dXBsMXQ1cmsgZHViYWd1bnRhLnNhaWtyaXNobmFAbQ&amp;tmsrc=dubagunta.saikrishna%40gmail.com"
            >
              <div className="flex space-x-4 flex-row-reverse">
                <TypographyH2 paris className="text-center">
                  Save the date
                </TypographyH2>
                <img
                  className="h-8"
                  alt="google calendar button logo"
                  src="https://fonts.gstatic.com/s/i/productlogos/calendar_2020q4/v13/web-64dp/logo_calendar_2020q4_color_2x_web_64dp.png"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
  const youtubeUrl = Buffer.from(re as String, "base64url").toString("utf-8");

  return (
    <div className="p-6">
      <div className="flex flex-col w-auto place-items-center">
        <TypographyH1 paris>Live</TypographyH1>
      </div>
      <YoutubePlayer url={youtubeUrl} />
    </div>
  );
}
