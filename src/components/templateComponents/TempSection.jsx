import { TempCard } from "./TempCard"

export function TempSection() {
    return (
        <>
            <div className="my-20 flex flex-col mx-auto max-w">

                <div className="flex flex-row gap-2 mb-5 ">
                    <img src="src/assets/images/Picture1.png" alt="icon" className="w-6 h-6 rounded-2xl" />
                    <h1 className="font-semibold text-gray-800 pt-1"> New and notable templates </h1>
                </div>
                <div className="flex flex-row  gap-5 justify-center  flex-wrap">
                    <TempCard
                        title="My Tasks | Trello"
                        subtitle="by Trello Team"
                        description="Track all your to-dos in your own, private Trello board."
                        numusers={0}
                        numviews={6}
                        image="https://d2k1ftgv7pobq7.cloudfront.net/images/backgrounds/gradients/peach.svg"
                    />
                    <TempCard
                        title="New Hire Onboarding"
                        subtitle="by Trello Team"
                        description="Help new employees start with this onboarding templates."
                        numusers={"18.3k"}
                        numviews={"131.3k"}
                        image="https://d2k1ftgv7pobq7.cloudfront.net/images/backgrounds/gradients/peach.svg"
                    />
                    <TempCard
                        title="Tier List"
                        subtitle="by Trello Engineering Team"
                        description="Use this template to create a tier list."
                        numusers={"2.9k"}
                        numviews={"23.3k"}
                        image="https://d2k1ftgv7pobq7.cloudfront.net/images/backgrounds/gradients/peach.svg"
                    />
                </div>
            </div>
        </>
    )
}