import { ReactNode, useState } from "react"
import { FiMinus } from "react-icons/fi"
import { GoPlus } from "react-icons/go"

interface CounterProps{
  children?: ReactNode
}

export function Counter({ children }: CounterProps) {
  const [counter, setCounter] = useState(1)

  function plusCounter() {
    setCounter((state) => state + 1)
  }

  function minusCounter() {
    if (counter > 1) {
      setCounter((state) => state - 1)
    }
  }

  return (
    <>
      <div className="flex gap-2 items-center p-2 bg-gray-200 rounded-md">
        <FiMinus
          className="cursor-pointer text-violet-900"
          onClick={minusCounter}
        />
        <span className="text-amber-950"> {counter} </span>
        <GoPlus
          className="cursor-pointer text-violet-900"
          onClick={plusCounter}
        />
      </div>
      {children}
    </>
  )
}
