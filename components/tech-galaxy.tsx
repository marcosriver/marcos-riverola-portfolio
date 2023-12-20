'use client'
import Image from 'next/image'
import { off } from 'process'
import { useEffect, useRef } from 'react'

export const TechGalaxy = (): React.ReactNode => {
  const ref = useRef(null)

  useEffect(() => {
    const galaxy = ref.current
  }, [])

  return (
    <section ref={ref} className='h-[320px] w-[320px] translate-x-1/2'>
      <div className='h-[320px] w-[320px] rounded-full border-secondary border-2 relative'>
        <Image className='absolute translate-x-1/2 origin-center' width={44} height={33} src={'/js.png'} />
      </div>
    </section>
  )
}
