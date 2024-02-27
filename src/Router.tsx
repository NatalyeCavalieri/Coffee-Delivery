import { Routes, Route } from 'react-router-dom'
import { App } from './Pages/App'
import { Checkout } from './Pages/Checkout' 
import { OrderConfirmed } from './Pages/OrderConfirmed'


export function Router(){
  return(
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/confirmed' element={<OrderConfirmed/>} />
    </Routes>
  )
}