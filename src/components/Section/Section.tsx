import CoffeeImage from '../../assets/coffeeImage.png'
import { Details } from './Details/Details'
import backgroundImage from '../../assets/Background.svg'


export function Section(){
  return (
    <div
      className="flex gap-14 mb-8 bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div>
        <h1 className="text-5xl font-serif font-extrabold text-amber-950">
          Encontre o café perfeito para qualquer hora do dia
        </h1>
        <p className="text-xl text-amber-950 mt-4 mb-16">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <Details />
      </div>
      <div>
        <img
          className="h-[360px] max-w-[360px] "
          src={CoffeeImage}
          alt="illustration of a coffee cup"
        />
      </div>
    </div>
  )
}