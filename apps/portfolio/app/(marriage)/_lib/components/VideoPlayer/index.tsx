"use client"
import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player/file'
import screenfull from 'screenfull'

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
            height={'fit'}
            muted={mute}
            stopOnUnmount={true}
            playing={true}
        />
    </div>
}