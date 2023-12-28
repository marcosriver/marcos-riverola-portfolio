'use client'
import { useEffect, useState } from 'react'

export const TechGalaxy = (): React.ReactNode => {
  const [degrees, setDegrees] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDegrees(prev => prev % 360 + 0.20)
    }, 10)

    return () => { clearInterval(interval) }
  }, [])

  return (
    <section className='h-[300px] w-[300px] md:ml-auto md:my-auto mt-auto absolute bottom-0 md:bottom-auto md:right-0 translate-y-1/2  md:translate-y-0 md:translate-x-1/2'>
      <div className='h-[300px] w-[300px] rounded-full border-secondary border-2 absolute animate-[spin_10s_linear_infinite] '>
         <img className='absolute top-1/2 -ml-6 -mt-6 h-12 w-12 animate-[spin_10s_reverse_linear_infinite] ' src={'https://pub-2459faede577448399a9c8c322909fc2.r2.dev/js.webp'} />
         <img className='absolute left-1/2 -ml-6 -mt-6 h-12 w-12 animate-[spin_10s_reverse_linear_infinite]' src={'https://pub-2459faede577448399a9c8c322909fc2.r2.dev/react.webp'} />
         <img className='absolute bottom-0 left-1/2 -ml-6 -mb-6 h-12 w-12 animate-[spin_10s_reverse_linear_infinite]' src={'https://pub-2459faede577448399a9c8c322909fc2.r2.dev/mysql.webp'} />
         <img className='absolute top-1/2 right-0 -mr-6 -mt-6 h-12 w-12 animate-[spin_10s_reverse_linear_infinite]' src={'https://pub-2459faede577448399a9c8c322909fc2.r2.dev/java.webp'} />
      </div>
      <div style={{ transform: `translate(-50%,-50%) rotate(${degrees + 90}deg)` }} className='h-[200px] w-[200px] absolute left-1/2 top-1/2 rounded-full border-secondary border-2 '>
         <img style={{ transform: `rotate(${-degrees - 90}deg)` }} className='absolute top-1/2 -ml-6 -mt-6 h-12 w-12 ' src={'https://pub-2459faede577448399a9c8c322909fc2.r2.dev/nextjs.webp'} />
        <img style={{ transform: `rotate(${-degrees - 90}deg)` }} className='absolute left-1/2 -ml-6 -mt-6 h-12 w-12' src={'https://pub-2459faede577448399a9c8c322909fc2.r2.dev/springboot.webp'} />
         <img style={{ transform: `rotate(${-degrees - 90}deg)` }} className='absolute bottom-0 left-1/2 -ml-6 -mb-6 h-12 w-12 ' src={'https://pub-2459faede577448399a9c8c322909fc2.r2.dev/tailwindcss.webp'} />
         <img style={{ transform: `rotate(${-degrees - 90}deg)` }} className='absolute top-1/2 right-0 -mr-6 -mt-6 h-12 w-12 ' src={'https://pub-2459faede577448399a9c8c322909fc2.r2.dev/typescript.webp'} />
      </div>
      <div style={{ transform: `translate(-50%,-50%) rotate(${degrees + 120}deg)` }} className='h-[100px] w-[100px] absolute left-1/2 top-1/2 rounded-full border-secondary border-2 '>
         <img style={{ transform: `rotate(${-degrees - 120}deg)` }} className='absolute top-1/2 -ml-6 -mt-6 h-12 w-12 ' src={'https://pub-2459faede577448399a9c8c322909fc2.r2.dev/github.webp'} />
         <img style={{ transform: `rotate(${-degrees - 120}deg)` }} className='absolute top-1/2 right-0 -mr-6 -mt-6 h-12 w-12 ' src={'https://pub-2459faede577448399a9c8c322909fc2.r2.dev/github.webp'} />
      </div>
    </section>
  )
}
