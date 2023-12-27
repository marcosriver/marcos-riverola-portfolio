import { GithubIcon, LinkedInIcon } from '@/lib/icons'
import { Card } from '../ui/card'
import { TechGalaxy } from '../tech-galaxy'

export const IntroCard = (): React.ReactNode => {
  return (
        <Card className="border-secondary border-2 col-span-2 box-shadow-pop text-secondary pl-10 flex flex-col md:flex-row w-full  overflow-clip">
            <section className='flex flex-col justify-center'>
                <h1 className="text-[1.5rem] xl:text-[3rem] leading-none">Hello, I am
                <span className="block font-bold">Marcos Riverola</span>
                </h1>
                <h2 className="text-[1.8rem] xl:text-[2rem] font-bold">Full Stack Developer</h2>
                <p className="text-[0.8rem] xl:text-[1.2rem]">I create incredible webistes</p>
                <div className="flex gap-x-4 py-2 pb-8">
                    <div className="hover:cursor-pointer hover:scale-110">
                        <GithubIcon className='h-[1.8rem] w-[1.8rem] xl:h-[2rem] xl:w-[2rem]'/>
                    </div>
                    <div className="hover:cursor-pointer hover:scale-110">
                        <LinkedInIcon className='h-[1.8rem] w-[1.8rem] xl:h-[2rem] xl:w-[2rem]'/>
                    </div>
                </div>
            </section>
            <TechGalaxy />
        </Card>

  )
}
