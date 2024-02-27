import { ReactNode } from 'react'
import { Counter } from './Counter'
import { ShoppingCartSimple } from '@phosphor-icons/react'

interface CoffeesProps{
  image: string
  title: string
  children: ReactNode
  content: string
}

export function Coffees({image, title, children, content}:CoffeesProps){

  return (
    <div className="flex flex-col items-center w-64 h-[20.5rem] bg-gray-100 rounded-tr-[36px] rounded-bl-[36px] rounded-br-md rounded-tl-md px-5">
      <img className="size-[7.5rem] mb-4 -mt-5" src={image} alt="" />
      {children}
      <h1 className="text-xl font-bold text-amber-950 font-serif mb-2">
        {title}
      </h1>
      <p className="text-sm text-gray-600 text-center mb-8">{content}</p>
      <footer className="flex justify-between">
        <div className="flex items-center mr-6">
          <p className="font-normal text-sm text-zinc-700 flex items-center">
            R$
            <strong className="font-extrabold font-serif text-2xl ml-1">
              9,90
            </strong>
          </p>
        </div>
        <div className="flex gap-2">
          <Counter>
            <button className="bg-violet-800 p-2 rounded-md hover:bg-violet-600">
              <ShoppingCartSimple
                className="text-white"
                weight="fill"
                size={22}
              />
            </button>
          </Counter>
        </div>
      </footer>
    </div>
  )
}