import TypographyH1 from "kd-ui/ui/typography/h1";
import VideoPlayer from "../../_lib/components/VideoPlayer";

export default function Page() {
    return <section className="p-6 flex flex-col w-auto h-screen items-center justify-start">
        <TypographyH1 paris>Invite</TypographyH1>
        <div className="flex h-full items-center">
            <VideoPlayer
                url="/videos/videoinvite.mp4"
            />
        </div>
    </section>
}