'use client'

import { useInstagramTabs } from '@/hooks/useInstagramTabs'
import { Card } from '../ui/card'

export const ProjectsCard = (): React.ReactNode => {
  const { activeCard, advanceTab, returnTab, timer, STEPS } = useInstagramTabs()

  return (
        <Card className="row-span-2 border-2 border-secondary bg-secondary flex flex-col">
          <img src='/bahadur-insta.jpg'></img>
            <section className='flex w-[90%] gap-x-2 mx-auto py-6'>
                {new Array(STEPS).fill({}).map((_, index) => {
                  return (
                  <div key={index} className='flex-1 h-[3px] bg-gray-500 rounded-full'>
                    <div style={activeCard === index ? { width: `${timer / 4}%` } : { width: '100%' }} className={`h-[3px]  ${index <= activeCard ? 'bg-primary' : ''}`}/>
                    </div>
                  )
                })}
            </section>
            <section className='bg-red-500 flex-grow rounded-2xl flex'>

              <div onClick={returnTab} className='bg-green-400 w-1/2 h-full'>

              </div>
              <div onClick={advanceTab} className='bg-gray-400 w-1/2 h-full'>

              </div>

            </section>
        </Card>
  )
}
