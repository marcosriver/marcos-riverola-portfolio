'use client'
import Image from 'next/image'
import { Card } from '../ui/card'
import { useState } from 'react'

import debounce from 'just-debounce-it'

export const ProfileCard = (): React.ReactNode => {
  const [hovered, setHovered] = useState(false)

  return (
        <Card className="flex flex-col items-center justify-center bg-secondary">
            <div onMouseEnter={() => { debounce(setHovered(!hovered), 700) }} className="group h-[100px] w-[100px] md:h-[150px] md:w-[150px] xl:h-[270px] xl:w-[275px] rounded-full bg-primary border-primary border-4 [perspective:1000px]">
                <div className={`relative h-full w-full transition-all duration-500 ease-out [transform-style:preserve-3d] ${hovered && '[transform:rotateY(540deg)]'} `}>
                    <div className='h-full w-full absolute inset-0'>
                        <Image fill src={'/marcos-photo.png'} alt="Photo of Marcos"/>
                    </div>
                    <div className={`h-full w-full absolute rounded-full inset-0 ${hovered && '[backface-visibility:hidden]'}`}>
                        <Image fill src={'/memoji.png'} alt="Photo of Marcos"/>
                    </div>
                </div>
            </div>
        </Card>
  )
}
