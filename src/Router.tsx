import { Routes, Route } from 'react-router-dom'
import { App } from './Pages/App'
import { Checkout } from './Pages/Checkout' 


export function Router(){
  return(
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/checkout' element={<Checkout/>} />
    </Routes>
  )
}