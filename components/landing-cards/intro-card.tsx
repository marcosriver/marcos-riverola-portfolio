import { GithubIcon, LinkedInIcon } from '@/lib/icons'
import { Card } from '../ui/card'
import { TechGalaxy } from '../tech-galaxy'
import Link from 'next/link'
import { Button } from '../ui/button'
import { CVDialog } from '../CVDialog'

export const IntroCard = (): React.ReactNode => {
  return (
    <>
    <Card className="border-secondary border-2 col-span-2 box-shadow-pop text-secondary flex flex-col md:flex-row w-full items-center overflow-clip pb-[150px] md:pb-0 cursor-pointer">
        <section className='flex flex-col justify-center my-12 px-8 xl:px-12'>
            <h1 className="text-[3rem] md:text-[1rem] xl:text-[3rem] leading-none">Hello, I am
            <span className="block font-bold">Marcos Riverola</span>
            </h1>
            <h2 className="text-[1.8rem] md:text-[1.2rem] xl:text-[2rem] font-bold">Full Stack Developer</h2>
            <p className="text-[0.8rem] xl:text-[1.2rem]">I create incredible webistes</p>
            <div className="flex gap-x-4 py-2 pb-8">
                <div className="hover:cursor-pointer hover:scale-110">
                    <Link target='_blank' rel='noopener noreferer' href="https://github.com/marcosriver">
                        <GithubIcon className='h-[1.8rem] w-[1.8rem] xl:h-[2rem] xl:w-[2rem]'/>
                    </Link>
                </div>
                <div className="hover:cursor-pointer hover:scale-110">
                    <Link href='https://www.linkedin.com/in/marcos-riverola-errando/' target='_blank' rel='noopener noreferer'><LinkedInIcon className='h-[1.8rem] w-[1.8rem] xl:h-[2rem] xl:w-[2rem]'/></Link>
                </div>
                <Button className=' bg-secondary text-primary h-[1.8rem] xl:h-[2rem] hover:scale-110 rounded-md ' asChild>
                    <Link target='_blank' rel="noopener noreferer" href={`${process.env.NEXT_PUBLIC_ASSETS_BUCKET_URL}cv+-+Marcos+Riverola+-+EN.pdf`}>See CV</Link>
                </Button>
            </div>
        </section>
        <TechGalaxy />
    </Card>
    </>
  )
}
