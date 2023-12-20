import { GithubIcon, LinkedInIcon } from '@/lib/icons'
import { Card } from '../ui/card'
import { TechGalaxy } from '../tech-galaxy'

export const IntroCard = (): React.ReactNode => {
  return (
        <Card className="border-secondary border-2 col-span-2 box-shadow-pop text-secondary pl-10 flex justify-between items-center overflow-clip">
            <section className='flex flex-col justify-center'>
                <h1 className="text-[3rem] leading-none">Hello, I am
                <span className="block font-bold">Marcos Riverola</span>
                </h1>
                <h2 className="text-[30px] font-bold">Full Stack Developer</h2>
                <p className="text-[20px]">I create incredible webistes</p>
                <div className="flex gap-x-4 py-2 pb-8">
                    <div className="hover:cursor-pointer hover:scale-110">
                        <GithubIcon />
                    </div>
                    <div className="hover:cursor-pointer hover:scale-110">
                        <LinkedInIcon />
                    </div>
                </div>
            </section>
            <TechGalaxy />
        </Card>

  )
}
