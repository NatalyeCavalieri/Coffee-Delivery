import { Header } from "../components/Header/Header"
import { CartFull } from "../components/Header/Cart/CartFull"
import { PiMapPinLineLight, PiCurrencyDollar, PiCreditCard, PiBankLight, PiMoneyLight } from "react-icons/pi"
import { Payment } from "../components/Payment"
import { CoffeeCard } from "../components/CoffeeSelected/CoffeeCard"
import { COFFEES } from "../components/coffeesImages"
import { ItemsTotal } from "../components/CoffeeSelected/ItemsTotal"


export function Checkout() {

  return (
    <div>
      <Header>
        <CartFull />
      </Header>
      <div className="px-36 mt-10 flex gap-8">
        <div className="max-w-2xl">
          <h1 className="font-serif font-bold text-lg text-amber-950 mb-4">
            Complete seu pedido
          </h1>
          <div className="bg-zinc-100 p-10 mb-3 rounded-md">
            <div className="flex items-start gap-2 mb-8">
              <PiMapPinLineLight size={22} className="text-amber-600" />
              <div>
                <strong className="font-normal text-amber-950">
                  Endereço de Entrega
                </strong>
                <p className="text-sm text-zinc-700">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </div>
            </div>
            <form className="flex flex-col gap-4">
              <input
                className="p-3 rounded bg-zinc-200 text-zinc-500 placeholder:text-sm font-sans placeholder:text-zinc-400 border-[1px] border-zinc-300 outline-amber-700 w-48 "
                type="number"
                placeholder="CEP"
              />
              <input
                className="p-3 rounded bg-zinc-200 text-zinc-500 placeholder:text-sm font-sans placeholder:text-zinc-400 border-[1px] border-zinc-300 outline-amber-700 "
                type="text"
                placeholder="Rua"
              />
              <div className="flex gap-3">
                <input
                  className="p-3 rounded bg-zinc-200 text-zinc-500 placeholder:text-sm font-sans placeholder:text-zinc-400 border-[1px] border-zinc-300 outline-amber-700 "
                  type="number"
                  placeholder="Número"
                />
                <div className="p-3 rounded bg-zinc-200 text-zinc-500 placeholder:text-sm font-sans placeholder:text-zinc-400 border-[1px] border-zinc-300 outline-amber-700 flex justify-between flex-1 focus-within:ring-amber-700  focus-within:ring-[2px]">
                  <input
                    className="bg-transparent group outline-none"
                    type="text"
                    placeholder="Complemento"
                  />
                  <input
                    className="bg-transparent placeholder:text-end placeholder:italic placeholder:text-xs w-12 outline-none"
                    type="text"
                    placeholder="Opcional"
                    readOnly
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <input
                  className="p-3 rounded bg-zinc-200 text-zinc-500 placeholder:text-sm font-sans placeholder:text-zinc-400 border-[1px] border-zinc-300 outline-amber-700 "
                  type="text"
                  placeholder="Bairro"
                />
                <input
                  className="p-3 rounded bg-zinc-200 text-zinc-500 placeholder:text-sm font-sans placeholder:text-zinc-400 border-[1px] border-zinc-300 outline-amber-700 flex-1 "
                  type="text"
                  placeholder="Cidade"
                />
                <input
                  className="p-3 rounded bg-zinc-200 text-zinc-500 placeholder:text-sm font-sans placeholder:text-zinc-400 border-[1px] border-zinc-300 outline-amber-700 w-14 uppercase "
                  type="text"
                  placeholder="UF"
                  maxLength={2}
                />
              </div>
            </form>
          </div>

          <div className="bg-zinc-100 p-10 flex items-start gap-8 mb-8 flex-col rounded-md">
            <div className="flex">
              <PiCurrencyDollar size={22} className="text-violet-700" />
              <div className="">
                <strong className="font-normal text-amber-950">
                  Pagamento
                </strong>
                <p className="text-sm text-zinc-700">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
            <div className="flex gap-3 w-full">
              <Payment
                title="Cartão de crédito"
                icon={<PiCreditCard className="text-violet-600" />}
              />
              <Payment
                icon={<PiBankLight className="text-violet-600" />}
                title="Cartão de débito"
              />
              <Payment
                icon={<PiMoneyLight className="text-violet-600" />}
                title="Dinheiro"
              />
            </div>
          </div>
        </div>

        <div className="max-w-2xl">
          <h1 className="mb-5 font-serif font-bold text-lg text-amber-950">
            Cafés selecionados
          </h1>
          <div className="bg-zinc-100 p-8 rounded-tr-[44px] rounded-bl-[44px] rounded-tl-[6px] rounded-br-[6px]">
            <div className="flex flex-col gap-6">
              <CoffeeCard image={COFFEES.AMERICAN_ESPRESSO} />
              <CoffeeCard image={COFFEES.AMERICAN_ESPRESSO} />
              <ItemsTotal />
                <button
                  className="bg-amber-500 py-3 px-2 rounded-md text-white font-bold text-sm uppercase hover:brightness-90 duration-500"
                  type="button"
                >
                  confirmar pedido
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
