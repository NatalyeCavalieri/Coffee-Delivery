import { Counter } from "../Menu/Coffees/Counter"
import { PiTrashLight } from "react-icons/pi"



interface CoffeeCardProps{
  image: string
}

export function CoffeeCard({ image }: CoffeeCardProps) {
  return (
    <div>
      <div className="flex">
        <div className="flex gap-4">
          <div>
            <img className="size-16" src={image} alt="" />
          </div>
          <div>
            <p className="text-amber-950">Expresso Tradicional</p>
            <div className="flex items-center gap-2">
              <Counter />
              <button className="flex gap-1 items-center p-2 bg-gray-200 rounded-md text-xs text-zinc-700">
                <PiTrashLight className="text-violet-600" />
                Remover
              </button>
            </div>
          </div>
        </div>
        <div>
          <span className="whitespace-nowrap text-base font-bold text-zinc-700">
            R$ 9,90
          </span>
        </div>
      </div>
      <div className="border-b-2 border-gray-200 pb-6"></div>
    </div>
  )
}