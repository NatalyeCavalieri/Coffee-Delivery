export function ItemsTotal(){
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <p className="text-zinc-700 text-sm">Total de itens</p>
        <span className="text-zinc-700 text-sm">R$ 29,70</span>
      </div>
      <div className="flex justify-between">
        <p className="text-zinc-700 text-sm">Entrega</p>
        <span className="text-zinc-700 text-sm">R$ 3,50</span>
      </div>
      <div className="flex justify-between">
        <p className="text-zinc-700 text-xl font-bold">Total</p>
        <span className="text-zinc-700 text-xl font-bold">R$ 33,20</span>
      </div>
    </div>
  )
}