import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { System } from './pages/System'
import { LandingPage } from './pages/LandingPage'
import { Login } from './pages/Login'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<System userType='admin' />} />
        <Route path='/meus-registros' element={<System userType='colaborador' />} />
      </Routes>
    </BrowserRouter >
  )
}