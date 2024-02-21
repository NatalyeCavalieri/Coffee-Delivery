import LogoCoffee from '../../assets/Logo.svg'
import { FaMapMarkerAlt } from "react-icons/fa"
import { CartEmpty } from './Cart/CartEmpty'
import { CartFull } from './Cart/CartFull'


export function Header(){
  return (
    <div>
      <div className="bg-white py-8 px-40">
        <div className="flex justify-between">
          <img src={LogoCoffee} alt="logo Coffee Delivery" />
          <div className='flex gap-3 items-center'>
            <div className="p-2 bg-violet-200 flex gap-1 rounded-md">
              <FaMapMarkerAlt className="text-violet-900 h-4 w-4" />
              <p className="text-violet-900 text-sm">Porto Alegre, RS</p>
            </div>
            <CartEmpty/>
            <CartFull/>
          </div>
        </div>
      </div>
    </div>
  )
}