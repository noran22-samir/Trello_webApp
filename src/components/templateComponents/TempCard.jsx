import { CopyIcon } from "lucide-react"
import { EyeIcon } from "lucide-react"


export function TempCard({ title, subtitle, description, numusers, numviews, image }) {
    return (
        <>
            <div>

                <div className="relative mb-4">
                    <img src={image} alt={title} className="rounded "/>

                    <div className="absolute top-28 left-3 w-12 h-12 bg-white   rounded shadow-lg">
                        <img src="/src/assets/images/newLogo.png" alt="logo" />
                    </div>
                </div>
                <h1 className="font-semibold text-gray-800 mb-0">{title}</h1>
                <p className="font-semibold text-xs text-gray-500 mb-0">{subtitle}</p>
                <p className="font-semibold text-xs text-gray-700">{description}</p>

                <div className="flex gap-4 mt-2 text-gray-500">
                    <p className="flex items-center gap-1 text-xs font-mono">{numusers} <span ><CopyIcon size={13} /></span></p>
                    <p className="flex items-center gap-1 text-xs font-mono">{numviews} <span><EyeIcon size={16} /></span></p>
                </div>
            </div>
        </>

    )
}