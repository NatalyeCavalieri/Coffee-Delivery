import { Coffees } from "./Coffees/Coffees";
import { COFFEES } from '../coffeesImages'

export function Menu(){
  return (
    <div>
      <h1 className="text-[2rem] font-extrabold font-serif text-amber-950 mb-12">
        Nossos cafés
      </h1>
      <div className="grid grid-cols-3 gap-y-12">
        <Coffees
          image={COFFEES.TRADITIONAL_ESPRESSO}
          title="Expresso Tradicional"
          content="O tradicional café feito com água quente e grãos moídos"
        >
          <span className="text-amber-500 bg-amber-100 rounded-[100px] py-1 px-2 text-[10px] font-bold uppercase mb-5">
            Tradicional
          </span>
        </Coffees>

        <Coffees
          image={COFFEES.AMERICAN_ESPRESSO}
          title="Expresso Americano"
          content="Expresso diluído, menos intenso que o tradicional"
        >
          <span className="text-amber-500 bg-amber-100 rounded-[100px] py-1 px-2 text-[10px] font-bold uppercase mb-5">
            Tradicional
          </span>
        </Coffees>

        <Coffees
          image={COFFEES.ESPRESSO_CREAMY}
          title="Expresso Cremoso"
          content="Café expresso tradicional com espuma cremosa"
        >
          <span className="text-amber-500 bg-amber-100 rounded-[100px] py-1 px-2 text-[10px] font-bold uppercase mb-5">
            Tradicional
          </span>
        </Coffees>

        <Coffees
          image={COFFEES.ICED_ESPRESSO}
          title="Expresso Gelado"
          content="Bebida preparada com café expresso e cubos de gelo"
        >
          <div className="flex gap-1">
            <span className="text-amber-500 bg-amber-100 rounded-[100px] py-1 px-2 text-[10px] font-bold uppercase mb-5">
              Tradicional
            </span>
            <span className="text-amber-500 bg-amber-100 rounded-[100px] py-1 px-2 text-[10px] font-bold uppercase mb-5">
              Gelado
            </span>
          </div>
        </Coffees>

        <Coffees
          image={COFFEES.COFFEE_MILK}
          title="Café com Leite"
          content="Meio a meio de expresso tradicional com leite vaporizado"
        >
          <div className="flex gap-1">
            <span className="text-amber-500 bg-amber-100 rounded-[100px] py-1 px-2 text-[10px] font-bold uppercase mb-5">
              Tradicional
            </span>
            <span className="text-amber-500 bg-amber-100 rounded-[100px] py-1 px-2 text-[10px] font-bold uppercase mb-5">
              com leite
            </span>
          </div>
        </Coffees>

        <Coffees
          image={COFFEES.MILK}
          title="Latte"
          content="Uma dose de café expresso com o dobro de leite e espuma cremosa"
        >
          <div className="flex gap-1">
            <span className="text-amber-500 bg-amber-100 rounded-[100px] py-1 px-2 text-[10px] font-bold uppercase mb-5">
              Tradicional
            </span>
            <span className="text-amber-500 bg-amber-100 rounded-[100px] py-1 px-2 text-[10px] font-bold uppercase mb-5">
              com leite
            </span>
          </div>
        </Coffees>

        <Coffees
          image={COFFEES.CAPPUCCINO}
          title="Capuccino"
          content="Bebida com canela feita de doses iguais de café, leite e espuma"
        >
          <div className="flex gap-1">
            <span className="text-amber-500 bg-amber-100 rounded-[100px] py-1 px-2 text-[10px] font-bold uppercase mb-5">
              Tradicional
            </span>
            <span className="text-amber-500 bg-amber-100 rounded-[100px] py-1 px-2 text-[10px] font-bold uppercase mb-5">
              com leite
            </span>
          </div>
        </Coffees>
        <Coffees
          image={COFFEES.MACCHIATO}
          title="Macchiato"
          content="Café expresso misturado com um pouco de leite quente e espuma"
        >
          <div className="flex gap-1">
            <span className="text-amber-500 bg-amber-100 rounded-[100px] py-1 px-2 text-[10px] font-bold uppercase mb-5">
              Tradicional
            </span>
            <span className="text-amber-500 bg-amber-100 rounded-[100px] py-1 px-2 text-[10px] font-bold uppercase mb-5">
              com leite
            </span>
          </div>
        </Coffees>
        <Coffees
          image={COFFEES.MOCACCINO}
          title="Mocaccino"
          content="Café expresso com calda de chocolate, pouco leite e espuma"
        >
          <div className="flex gap-1">
            <span className="text-amber-500 bg-amber-100 rounded-[100px] py-1 px-2 text-[10px] font-bold uppercase mb-5">
              Tradicional
            </span>
            <span className="text-amber-500 bg-amber-100 rounded-[100px] py-1 px-2 text-[10px] font-bold uppercase mb-5">
              com leite
            </span>
          </div>
        </Coffees>
        <Coffees
          image={COFFEES.HOT_CHOCOLATE}
          title="Chocolate Quente"
          content="Bebida feita com chocolate dissolvido no leite quente e café"
        >
          <div className="flex gap-1">
            <span className="text-amber-500 bg-amber-100 rounded-[100px] py-1 px-2 text-[10px] font-bold uppercase mb-5">
              especial
            </span>
            <span className="text-amber-500 bg-amber-100 rounded-[100px] py-1 px-2 text-[10px] font-bold uppercase mb-5">
              com leite
            </span>
          </div>
        </Coffees>
        <Coffees
          image={COFFEES.CUBAN}
          title="Cubano"
          content="Drink gelado de café expresso com rum, creme de leite e hortelã"
        >
          <div className="flex gap-1">
            <span className="text-amber-500 bg-amber-100 rounded-[100px] py-1 px-2 text-[10px] font-bold uppercase mb-5">
              especial
            </span>
            <span className="text-amber-500 bg-amber-100 rounded-[100px] py-1 px-2 text-[10px] font-bold uppercase mb-5">
              alcoólico
            </span>
            <span className="text-amber-500 bg-amber-100 rounded-[100px] py-1 px-2 text-[10px] font-bold uppercase mb-5">
              gelado
            </span>
          </div>
        </Coffees>
        <Coffees
          image={COFFEES.HAVAIAN}
          title="Havaiano"
          content="Bebida adocicada preparada com café e leite de coco"
        >
          <span className="text-amber-500 bg-amber-100 rounded-[100px] py-1 px-2 text-[10px] font-bold uppercase mb-5">
            especial
          </span>
        </Coffees>
        <Coffees
          image={COFFEES.ARAB}
          title="Árabe"
          content="Bebida preparada com grãos de café árabe e especiarias"
        >
          <span className="text-amber-500 bg-amber-100 rounded-[100px] py-1 px-2 text-[10px] font-bold uppercase mb-5">
            especial
          </span>
        </Coffees>
        <Coffees
          image={COFFEES.IRELAND}
          title="Irlandês"
          content="Bebida a base de café, uísque irlandês, açúcar e chantilly"
        >
          <div className="flex gap-1">
            <span className="text-amber-500 bg-amber-100 rounded-[100px] py-1 px-2 text-[10px] font-bold uppercase mb-5">
              especial
            </span>
            <span className="text-amber-500 bg-amber-100 rounded-[100px] py-1 px-2 text-[10px] font-bold uppercase mb-5">
              alcoólico
            </span>
          </div>
        </Coffees>
      </div>
    </div>
  )
}