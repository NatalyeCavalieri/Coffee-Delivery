import { ReactNode } from 'react'
import LogoCoffee from '../../assets/Logo.svg'
import { FaMapMarkerAlt } from "react-icons/fa"
import { NavLink } from 'react-router-dom'

interface HeaderProps{
  children: ReactNode
}


export function Header({ children }: HeaderProps) {
  return (
    <div>
      <div className="bg-white py-8 px-40">
        <div className="flex justify-between">
          <NavLink to="/">
            <img src={LogoCoffee} alt="logo Coffee Delivery" />
          </NavLink>
          <div className="flex gap-3 items-center">
            <div className="p-2 bg-violet-200 flex gap-1 rounded-md">
              <FaMapMarkerAlt className="text-violet-900 h-4 w-4" />
              <p className="text-violet-900 text-sm">Porto Alegre, RS</p>
            </div>
            <NavLink to="/checkout">{children}</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}