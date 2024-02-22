import { FaShoppingCart } from "react-icons/fa"
import { MdTimer } from "react-icons/md"
import { BsBoxSeamFill } from "react-icons/bs"
import { GiCoffeeCup } from "react-icons/gi"

export function Details() {
  return (
    <div className="grid grid-cols-2 gap-6 mb-24">
      <p className="flex items-center gap-3 whitespace-nowrap">
        <div className="bg-amber-600 rounded-full p-2 inline-block">
          <FaShoppingCart className="size-4 text-white" />
        </div>
        Compra simples e segura
      </p>
      <p className="flex items-center gap-3 whitespace-nowrap">
        <div className="bg-zinc-700 rounded-full p-2 inline-block">
          <BsBoxSeamFill className="size-4 text-white" />
        </div>
        Embalagem mantém o café intacto
      </p>
      <p className="flex items-center gap-3  whitespace-nowrap">
        <div className="bg-amber-500 rounded-full p-2 inline-block">
          <MdTimer className="size-4 text-white" />
        </div>
        Entrega rápida e rastreada
      </p>
      <p className="flex items-center gap-3 whitespace-nowrap">
        <div className="bg-violet-600 rounded-full p-2 inline-block">
          <GiCoffeeCup className="size-4 text-white" />
        </div>
        O café chega fresquinho até você
      </p>
    </div>
  )
}
