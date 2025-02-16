import { LightingIcon } from "@/shared/ui";
import { Favorites } from "./favorites"
import { CardData } from "@/app/types/global";

export const Card = ({  image, name, price, day, day_count }: CardData) => {
  return (
    <div className="relative w-[150px]">
      <Favorites />
      <div className="w-full">
        <img src={image} alt={name} />
        <p className="font-bold text-base md:text-lg">{price}р</p>
        <div className="flex items-center gap-1">
          <span className="text-xs bg-black text-white px-1 rounded-md">7 705 x 2</span>
          <span className="text-xs">в сплит</span>
        </div>
        <h3 className="my-2 text-base">{name}</h3>
        <div className="flex gap-1">
          <p className="text-xs text-black/80">
            {day}
          </p>
          <div className="flex items-center gap-2">
            <span className="opacity-80"><LightingIcon /></span>
            <span className="text-xs text-black/80">{day_count}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
