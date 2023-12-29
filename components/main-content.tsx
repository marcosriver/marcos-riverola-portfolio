import { IntroCard } from './landing-cards/intro-card'
import { PhotosCard } from './landing-cards/photos-card'
import { ProfileCard } from './landing-cards/profile-card'
import { ProjectsCard } from './landing-cards/projects-card'
import { PhotosGaleryWrapper } from './photos-galery/photos-galery-wrapper'

export const MainContent = (): React.ReactNode => {
  return (
        <main className='grid grid-cols-2 md:grid-cols-3 md:auto-rows-[200px] xl:auto-rows-[340px] gap-4 w-[90vw] md:w-[600px] xl:w-[1140px] mx-auto my-auto py-4'>
            <IntroCard />
            <ProjectsCard />
            <ProfileCard />
            <PhotosCard>
              <PhotosGaleryWrapper/>
            </PhotosCard>
        </main>
  )
}
