"use client";
import TypographySmall from "kd-ui/ui/typography/small";
import { ReactNode, useRef, useState } from "react";
import ReactPlayer from "react-player/file";
import ReactYoutube from "react-player/youtube";

const Overlay = ({ children }: { children: ReactNode }) => {
  const [ftui, setFtui] = useState(true);
  if (!ftui) {
    return children;
  }
  return (
    <div
      className="relative opacity-60 space-y-4"
      onClick={() => setFtui(false)}
    >
      <div className="fixed">
        <div className="flex w-full h-full items-center justify-center">
          <TypographySmall className="text-black">
            Tap to unmute
          </TypographySmall>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default function VideoPlayer({
  url,
  loop,
}: {
  url: string;
  loop?: boolean;
}) {
  const ref = useRef<ReactPlayer>(null);
  const [mute, setMute] = useState<boolean>(true);
  function toggleMute() {
    setMute(!mute);
  }
  return (
    <div onTouchStart={() => toggleMute()} onClick={() => toggleMute()}>
      <ReactPlayer
        ref={ref}
        url={url}
        controls={false}
        width={"auto"}
        height={732}
        muted={mute}
        wrapper={Overlay}
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
        height={732}
      />
    </div>
  );
}
