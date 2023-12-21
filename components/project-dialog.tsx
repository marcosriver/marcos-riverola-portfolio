import {
  Dialog,
  DialogContent
} from '@/components/ui/dialog'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { Badge } from './ui/badge'
import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowUpRightSquare } from 'lucide-react'

interface Props {
  open: boolean
  setOpen: () => void
  project: Project
}

export function ProjectDialog ({ open, setOpen, project }: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[80%] h-[80%] bg-primary overflow-y-scroll" >
        <div className='grid md:grid-cols-4 h-full gap-y-4 md:gap-x-8'>
            <section className='flex flex-grow md:col-span-3 w-full md:w-1/2 flex-col gap-y-2'>
                <strong className='text-2xl md:text-4xl text-secondary'>{project.projectName}</strong>
                <p>{project.description}</p>
            </section>
            <section className='col-span-1 md:sticky md:top-0 md:self-start space-y-1 '>
                <p className='text-secondary text-lg md:text-2xl font-bold'>Technologies</p>
                <div className='flex flex-wrap gap-1 py-2 '>
                {project.badges.map((badge) => {
                  return <Badge className='bg-secondary text-primary' key={badge}>{badge}</Badge>
                })}
                </div>
                <Link target='_blank' rel='noopener noreferer' href={project.url}>
                <Button variant={'default'} className='text-primary bg-secondary'>
                    See Website
                    <ArrowUpRightSquare className='h-6 w-6 ml-2'/>
                    </Button>
                </Link>
            </section>
            <section className='col-span-1 md:col-span-3 flex flex-col gap-y-8'>
                    {project.videos.map((video, index) => {
                      return (
                        <AspectRatio key={index} className='' ratio={16 / 9}>
                            <video autoPlay muted playsInline loop className='rounded-2xl' src={video}/>
                        </AspectRatio>
                      )
                    })}
            </section>
        </div>
      </DialogContent>
    </Dialog>
  )
}
