import { IntroCard } from './landing-cards/intro-card'
import { PhotosCard } from './landing-cards/photos-card'
import { ProfileCard } from './landing-cards/profile-card'
import { ProjectsCard } from './landing-cards/projects-card'

export const MainContent = (): React.ReactNode => {
  return (
        <main className='grid auto-rows-[340px] grid-cols-3 gap-4 w-[1140px] mx-auto my-auto'>
            <IntroCard />
            <ProjectsCard />
            <ProfileCard />
            <PhotosCard />
        </main>
  )
}
