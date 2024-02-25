import { ReactNode } from "react"

interface PaymentProps{
  title: string
  icon: ReactNode
}

export function Payment({title, icon }:PaymentProps) {
  return (
    <button className="p-4 bg-zinc-200 flex items-center gap-3 rounded-md cursor-pointer hover:brightness-90 duration-500 focus:ring-1 focus:ring-violet-700 w-44 text-nowrap">
      {icon}
      <div className="text-xs uppercase text-zinc-500" > {title} </div>
    </button>
  )
}
