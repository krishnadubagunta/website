"use client";
import TypographySmall from "kd-ui/ui/typography/small";
import { useState } from "react";
import ReactPlayer from "react-player/file";
import ReactYoutube from "react-player/youtube";

export default function VideoPlayer({
  url,
  loop,
}: {
  url: string;
  loop?: boolean;
}) {
  const [mute, setMute] = useState<boolean>(true);
  function toggleMute() {
    setMute(!mute);
  }
  return (
    <div className="flex flex-col-reverse space-y-2 items-center" onTouchStart={() => toggleMute()} onClick={() => toggleMute()}>
        <TypographySmall className="text-black">
            Tap to {mute ? "unmute" : "mute"}
        </TypographySmall>
      <ReactPlayer
        url={url}
        controls={false}
        width={"auto"}
        muted={mute}
        stopOnUnmount={true}
        loop={loop}
        playing={true}
      />
    </div>
  );
}

export function YoutubePlayer({ url }: { url: string }) {
  const [mute, setMute] = useState<boolean>(true);
  function toggleMute() {
    setMute(!mute);
  }
  return (
    <div onTouchStart={() => toggleMute()} onClick={() => toggleMute()}>
      <ReactYoutube
        url={url}
        controls={false}
        canEnablePIP
        width={"auto"}
        height={450}
      />
    </div>
  );
}
