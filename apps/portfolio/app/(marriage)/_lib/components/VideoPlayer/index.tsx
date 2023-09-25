"use client"
import { useRef, useState } from 'react'
import ReactPlayer from 'react-player/file'

export default function VideoPlayer({ url }: { url: string }) {
    const ref = useRef<ReactPlayer>(null)
    const [mute, setMute] = useState<boolean>(true)
    function toggleMute() {
        setMute(!mute)
    }
    return <div onTouchStart={() => toggleMute()} onClick={() => toggleMute() }>
        <ReactPlayer
            ref={ref}
            url={url}
            controls={false}
            width={'auto'}
            height={732}
            muted={mute}
            stopOnUnmount={true}
            playing={true}
        />
    </div>
}