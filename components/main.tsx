import { ActionCard } from "./landing-cards/action-card"
import { ProfileCard } from "./landing-cards/profile-card"
import { Card } from "./ui/card"

export const Main = () => {

    return (
        <main className='h-full flex justify-center items-center '>
            <div className="flex w-[1000px] gap-x-4 ">
                <div className="flex flex-col gap-y-4">
                    <ProfileCard />
                    <Card />
                </div>
                <div className="flex flex-col gap-y-4">
                    <Card />
                    <Card className="grid grid-cols-2 gap-4 w-full bg-transparent">
                        <ActionCard icon="/github.png" />
                        <ActionCard icon="/download.png" />
                        <Card className="w-full h-full"/>
                        <Card className="w-full h-full"/>
                    </Card>
                </div>
                <div className="flex flex-col gap-y-4">
                    <Card className="h-full" />
                    
                </div>
            </div>
        </main>
    )


}