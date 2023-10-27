import TypographyH1 from "kd-ui/ui/typography/h1";
import VideoPlayer from "../../_lib/components/VideoPlayer";

export default function Page() {
    return <section className="p-6 flex flex-col w-auto place-items-center">
        <TypographyH1 paris>Invite</TypographyH1>
        <VideoPlayer
            url="/videos/videoinvite.mp4"
        />
    </section>
}