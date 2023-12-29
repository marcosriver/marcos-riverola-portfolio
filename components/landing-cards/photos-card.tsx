'use client'

import { Card } from '../ui/card'
import { type PropsWithChildren, useState } from 'react'
import { Dialog, DialogContent } from '../ui/dialog'

export const PhotosCard = ({ children }: PropsWithChildren): React.ReactNode => {
  const [open, setOpen] = useState(false)

  return (
      <>
        <Card className="box-shadow-pop border-secondary border-2 cursor-pointer">
                <div onClick={() => { setOpen(true) }} className='w-full h-full grid place-items-center relative'>
                  <img alt="Earth Small Image" className='w-[80%] opacity-30 min-h-[140px]' src={`${process.env.NEXT_PUBLIC_ASSETS_BUCKET_URL}earth-small.webp`} />
                  <p className='text-secondary text-center w-full text-[16px] md:text-[20px] xl:text-[30px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xl:whitespace-nowrap'>I also like to take pictures</p>
                </div>
        </Card>
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="w-[80%] h-[80%] bg-primary overflow-scroll">
              {children}
            </DialogContent>
          </Dialog>
      </>
  )
}
