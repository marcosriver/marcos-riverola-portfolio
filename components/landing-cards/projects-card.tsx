'use client'

import { useInstagramTabs } from '@/hooks/useInstagramTabs'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { ProjectDialog } from '../project-dialog'
import { useState } from 'react'

export const ProjectsCard = (): React.ReactNode => {
  const { activeCard, advanceTab, returnTab, percentage, steps, project, pauseTimer } = useInstagramTabs()

  const [open, setOpen] = useState(false)

  const toggleProject = () => {
    pauseTimer(!open)
    setOpen(!open)
  }

  return (
        <Card className="row-span-2 col-span-2 md:col-span-1 border-2 border-secondary bg-secondary flex flex-col order-last md:-order-none relative overflow-clip">
            <img className='object-contain absolute z-10 rounded-2xl' src={project.photo}></img>
            <section className='flex w-[90%] gap-x-2 mx-auto py-6 absolute top-0 z-20 left-1/2 -translate-x-1/2'>
                {new Array(steps).fill({}).map((_, index) => {
                  return (
                  <div key={index} className='flex-1 h-[3px] bg-gray-500 rounded-full'>
                    <div style={activeCard === index ? { width: `${percentage}%` } : { width: '100%' }} className={`h-[3px] rounded-full  ${index <= activeCard ? 'bg-primary' : ''}`}/>
                    </div>
                  )
                })}
            </section>
            <section className='bg-transparent flex-grow rounded-2xl flex absolute z-30 top-0 h-full w-full'>
              <div onClick={returnTab} className='bg-transparent w-1/2 h-full rounded-2xl'>
              </div>
              <div onClick={advanceTab} className='bg-transparent w-1/2 h-full rounded-2xl'>
              </div>
            </section>
            <section className='absolute bottom-0 z-40 w-full h-[30%]  bg-gradient-to-t from-black to-black/0 flex
             '>
                <Button onClick={toggleProject} variant={'default'} className='bg-secondary text-primary hover:bg-primary hover:text-secondary absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 translate-'>View Project</Button>
                <div className='flex flex-wrap-reverse w-full mt-auto mb-2 px-2'>
                    {project.badges.map((badge, index) => <Badge key={badge + index} className='bg-primary text-black mr-2 mt-2'>{badge}</Badge>)}</div>
            </section>
            <ProjectDialog open={open} setOpen={toggleProject}>
              <div className='flex flex-col items-center'>
                <h3 className='text-4xl text-secondary'>{project.projectName}</h3>
              </div>
            </ProjectDialog>
        </Card>
  )
}
