import { FaShoppingCart } from "react-icons/fa"

export function CartFull() {
  return (
    <div className="flex items-center">
      <div className="p-2 bg-amber-100 rounded-md cursor-pointer relative">
        <FaShoppingCart className="h-5 w-5 text-amber-600 " />
        <div className="bg-amber-600 text-white rounded-full flex items-center justify-center h-5 w-5 absolute -top-3 left-6 text-xs font-bold">
          3
        </div>
      </div>
    </div>
  )
}
