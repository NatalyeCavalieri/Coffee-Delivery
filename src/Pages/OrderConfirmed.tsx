import { CartEmpty } from "../components/Header/Cart/CartEmpty"
import { Header } from "../components/Header/Header"
import { FaMapMarkerAlt } from "react-icons/fa"
import { MdTimer } from "react-icons/md"
import { PiCurrencyDollar } from "react-icons/pi"
import OrderImage from "../assets/Illustration.svg"

export function OrderConfirmed() {
  return (
    <div>
      <Header>
        <CartEmpty />
      </Header>
      <div className="flex gap-28">
        <div className="pl-40 mt-20">
          <h1 className="font-serif font-extrabold text-3xl text-amber-500">
            Uhu! Pedido confirmado
          </h1>
          <p className="text-zinc-700 text-xl mb-10">
            Agora é só aguardar que logo o café chegará até você
          </p>

          <div className="bg-white p-10 rounded-tr-[36px] rounded-bl-[36px] rounded-tl-md rounded-br-md flex flex-col gap-8 relative before:content-[''] before:absolute before:-inset-[1px] before:rounded-tr-[37px] before:rounded-bl-[37px] before:rounded-tl-[7px] before:rounded-br-[7px] before:bg-gradient-to-r before:from-[#DBAC2C] before:to-[#8047F8] before:-z-[1] ">
            <div className="flex gap-3 items-center">
              <div className="p-2 bg-violet-600 rounded-full flex items-center justify-center size-10">
                <FaMapMarkerAlt className="text-white size-4" />
              </div>

              <p className="text-zinc-700 w-[315px] ">
                Entrega em{" "}
                <span className="font-bold text-zinc-700">
                  Rua João Daniel Martinelli, 102{" "}
                </span>
                Farrapos - Porto Alegre, RS
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <div className="p-2 bg-amber-500 rounded-full flex items-center justify-center size-10">
                <MdTimer className="text-white size-4" />
              </div>

              <p className="text-zinc-700 w-[145px] ">
                Previsão de entrega{" "}
                <span className="font-bold text-zinc-700">
                  {" "}
                  20 min - 30 min
                </span>
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <div className="p-2 bg-amber-700 rounded-full flex items-center justify-center size-10">
                <PiCurrencyDollar className="text-white size-[18px] " />
              </div>

              <p className=" text-zinc-700 w-[200px] ">
                Pagamento na entrega{" "}
                <span className="font-bold text-zinc-700">
                  Cartão de Crédito{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-44">
          <img src={OrderImage} alt="" />
        </div>
      </div>
    </div>
  )
}
