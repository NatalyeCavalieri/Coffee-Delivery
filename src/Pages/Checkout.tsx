import { Header } from "../components/Header/Header"
import { CartFull } from "../components/Header/Cart/CartFull"
import { PiMapPinLineLight } from "react-icons/pi"


export function Checkout() {
  return (
    <div>
      <Header>
        <CartFull />
      </Header>
      <div className="px-40 border-2 border-violet-700 mt-10">
        {/* div main */}
        <div>
          {/* div left */}
          <h1 className="font-serif font-bold text-lg text-amber-950 mb-4">
            Complete seu pedido
          </h1>
          <div className="bg-zinc-100 p-10">
            <div className="flex items-start gap-2 mb-8">
              <PiMapPinLineLight size={22} className="text-amber-600"/>
              <div>
                <strong className="font-normal text-amber-950">Endereço de Entrega</strong>
                <p className="text-sm text-zinc-700">Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
            <form>
              <input 
              className="p-3 rounded bg-zinc-200 text-zinc-500 placeholder:text-sm font-sans placeholder:text-zinc-400 border-[1px] border-zinc-300 outline-amber-700 "
              type="number" placeholder="CEP" />
            </form>
          </div>
        </div>

        <div> {/*div right*/}</div>
      </div>
      {/* div main */}
    </div>
  )
}
