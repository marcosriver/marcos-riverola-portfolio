import {
  Dialog,
  DialogContent
} from '@/components/ui/dialog'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { Badge } from './ui/badge'
import Link from 'next/link'

interface Props {
  open: boolean
  setOpen: () => void
  project: Project
  otherProjects: Array<{ id: number, thumbnail: string }>
  setActiveProject: (id: number) => void
}

export function ProjectDialog ({ open, setOpen, project, otherProjects, setActiveProject }: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[80%] h-[80%] bg-primary overflow-y-scroll" >
        <div className='flex flex-col md:flex-row w-full gap-4 p-4'>
          <div className='md:w-3/4 flex flex-col gap-4'>
            <section className='flex flex-col md:flex-row md:h-[150px] gap-4 justify-between'>
              <strong className='text-2xl xl:text-5xl text-secondary'>{project.projectName}</strong>
              <div className=' border-2 border-secondary rounded-2xl p-4 shadow-[8px_8px_0_#003EDE] h-[calc(100%-8px)] w-[calc(100%-8px)] md:w-2/3'>
                <p>{project.description}</p>
              </div>
            </section>
            <section className='flex flex-col gap-y-12 py-8 xl:py-0 xl:gap-y-16'>
            {project.videos.map((video, index) => {
              return (
                <div className='relative border-2 border-secondary rounded-2xl p-2 xl:p-8 box-shadow-constant w-[calc(100%-8px)]' key={index}>
                  <AspectRatio className=' rounded-2xl relative' ratio={16 / 9}>
                      <video autoPlay playsInline={true} loop muted className='rounded-2xl w-full h-full object-cover' src={video}/>
                  </AspectRatio>
                  <Link href={project.url} target='_blank' rel="noopener noreferer"><div className='absolute -top-6 xl:-top-10 left-8 z-10 rounded-t-2xl bg-secondary w-[50%] xl:w-[250px] xl:h-[40px] grid place-items-center'><p className='text-primary'>See Website</p></div></Link>
                </div>
              )
            })}
          </section>
          </div>
          <div className='md:w-1/4 sticky top-0 self-start flex flex-col gap-4'>
            <div className='rounded-2xl bg-secondary p-4 h-[150px]'>
              <div className='flex flex-wrap gap-1'>
              {project.badges.map((badge) => {
                return <Badge className='bg-primary text-secondary' key={badge}>{badge}</Badge>
              })}
              </div>
            </div>
            <div className='flex flex-col gap-y-4 border-2 border-secondary rounded-2xl p-4 shadow-[8px_8px_0_#003EDE] w-[calc(100%-8px)]'>
                <strong className='text-2xl xl:text-4xl text-secondary'>+ projects</strong>
                <div className='grid grid-cols-1 gap-4'>
                  {otherProjects.map((project, index) => {
                    return <img onClick={() => { setActiveProject(project.id) }} key={index} className='object-contain rounded-2xl cursor-pointer' src={project.thumbnail}></img>
                  })}
                </div>
              </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
