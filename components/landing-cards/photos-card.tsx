'use client'

import { Card } from '../ui/card'
import { useState } from 'react'
import { PhotosGalery } from '../photos-galery'
import { Dialog, DialogContent } from '../ui/dialog'

export const PhotosCard = (): React.ReactNode => {
  const [open, setOpen] = useState(false)

  return (
      <>
        <Card className="box-shadow-pop border-secondary border-2 cursor-pointer">
                <div onClick={() => { setOpen(true) }} className='w-full h-full grid place-items-center relative'>
                  <img className='w-[80%] h-auto opacity-80' src='https://pub-2459faede577448399a9c8c322909fc2.r2.dev/earth-small.webp' />
                  <p className='text-secondary text-center w-full text-[16px] md:text-[20px] xl:text-[30px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xl:whitespace-nowrap'>I also like to take pictures</p>
                </div>
        </Card>
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="w-[80%] h-[80%] bg-primary overflow-scroll">
              <PhotosGalery/>
            </DialogContent>
          </Dialog>
      </>
  )
}
