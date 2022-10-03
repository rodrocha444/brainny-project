import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/DashBoard'
import { LandingPage } from './pages/LandingPage'
import { Login } from './pages/Login'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}