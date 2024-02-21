import { Header } from "./components/Header/Header";

export function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 overflow-y-auto">
      {/* Aplicado fixação do header */}
      </div>
    </div>
  )
}

