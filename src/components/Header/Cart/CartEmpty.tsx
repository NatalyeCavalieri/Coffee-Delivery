import { FaShoppingCart } from "react-icons/fa";

export function CartEmpty(){
  return (
    <div className="p-2 bg-amber-100 rounded-md cursor-pointer">
      <FaShoppingCart className="h-5 w-5 text-amber-600 " />
    </div>
  )
}