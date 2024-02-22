import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { Section } from "./components/Section/Section";

export function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 overflow-y-auto py-8 px-40">
        <Section />
        <Menu/>
      </div>
    </div>
  )
}

