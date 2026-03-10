import { FCard } from "./FeaturedCategoriesCards";
import { BiSearch } from "react-icons/bi";

export function FSection() {
    return (
        <>
            <div className="flex flex-col justify-center items-center my-20 mx-auto max-w flex-wrap">
                <div className="flex flex-row justify-between w-full">
                    <h1 className="font-semibold mt-3 text-lg"> Featured Categories </h1>
                    <div className="relative">
                        <input type="search" name="" id="" className="border-solid border-2 p-3 rounded-md " placeholder="Find Template " />
                        <BiSearch className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                    </div>


                </div>
                <div className="flex flex-row justify-center gap-3 mt-5 flex-wrap">


                    <FCard title="Remote Work" image="https://trello.com/assets/f03ecb89626f72d4a0aa.svg" />
                    <FCard title="Design" image="https://trello.com/assets/157c58403db677619bea.svg" />
                    <FCard title="Business" image="https://trello.com/assets/3919e0fe0976de0298b4.svg" />
                    <FCard title="Education" image="https://trello.com/assets/dea39a045ff4c4d1d9b1.svg" />
                    <FCard title="Marketing" image="https://trello.com/assets/757286ddcfc9b405911a.svg" />
                    <FCard title="Engineering" image="https://trello.com/assets/e0b1e866de40a5468aaa.svg" />
                    <FCard title="Project Management" image="https://trello.com/assets/7d80b8fac2bac70d9e72.svg" />
                </div>
            </div>
        </>

    )
}
