'use client'

import { useEffect, useRef } from 'react'

export const Video = ({ video }: { video: string }) => {
  const refVideo = useRef(null)

  useEffect(() => {
    if (!refVideo.current) {
      return
    }

    // open bug since 2017 that you cannot set muted in video element https://github.com/facebook/react/issues/10389
    refVideo.current.defaultMuted = true
    refVideo.current.muted = true
  }, [])

  return <video ref={refVideo} autoPlay playsInline={true} loop className='rounded-2xl w-full h-full object-cover' src={video}/>
}
