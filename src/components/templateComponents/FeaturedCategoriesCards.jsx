export function FCard({title, image}){
    return(
        <div className="flex flex-col items-center gap-1 ">
            <img src={image} alt={title} className="
            h-28 w-28" />
            <p className="
                text-gray-500
                font-semibold
                text-sm
                text-center
            ">{title}</p>
        </div>
    )
}