"use client"
import { useRef, useState } from 'react'
import ReactPlayer from 'react-player/file'
import ReactYoutube from 'react-player/youtube'

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

export function YoutubePlayer({ url }: { url: string }) {
    const [mute, setMute] = useState<boolean>(true)
    function toggleMute() {
        setMute(!mute)
    }
    return  <div onTouchStart={() => toggleMute()} onClick={() => toggleMute() }>
        <ReactYoutube 
            url={url}
            controls={false}
            canEnablePIP
            width={'auto'}
            height={732}
        />
    </div>
}