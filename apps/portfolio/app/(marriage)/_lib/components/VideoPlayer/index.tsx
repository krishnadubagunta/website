"use client"
import TypographyH3 from 'kd-ui/ui/typography/h3'
import TypographyH4 from 'kd-ui/ui/typography/h4'
import TypographyP from 'kd-ui/ui/typography/p'
import { ReactNode, useRef, useState } from 'react'
import ReactPlayer from 'react-player/file'
import ReactYoutube from 'react-player/youtube'

const Overlay = ({ children }: { children: ReactNode }) => {
    const [ftui, setFtui] = useState(true)
    if(!ftui) {
        return children
    }
return <div className='relative opacity-60' onClick={() => setFtui(false)}>
    <div className='absolute h-full w-full'>
        <div className='flex h-full w-full items-center justify-center'>
            <TypographyH3 className='text-black'>Tap to unmute</TypographyH3>
        </div>
    </div>
    <div>
        { children }
    </div>
</div>}

export default function VideoPlayer({ url, loop }: { url: string, loop?: boolean }) {
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
            wrapper={Overlay}
            stopOnUnmount={true}
            loop={loop}
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