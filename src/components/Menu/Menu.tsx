import { Coffees } from "./Coffees/Coffees";

export function Menu(){
  return (
    <div>
      <h1 className="text-[2rem] font-extrabold font-serif text-amber-950">
        Nossos cafés
      </h1>
      <div className="grid grid-cols-4">
        <Coffees />
        <Coffees />
        <Coffees />
        <Coffees />
        <Coffees />
      </div>
    </div>
  )
}