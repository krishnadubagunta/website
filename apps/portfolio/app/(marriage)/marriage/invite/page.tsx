import VideoPlayer from "../../_lib/components/VideoPlayer";

export default function Page() {
    return <section className="p-6 flex justify-center w-full">
        <VideoPlayer
            url="/videos/videoplayback.mp4"
        />
    </section>
}