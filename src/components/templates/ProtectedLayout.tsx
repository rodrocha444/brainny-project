import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { verifyAuthentication } from '../../api/operations'

export function ProtectedLayout({ children }: { children: JSX.Element }) {
  const [authenticated, setAuthenticated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const verificated = verifyAuthentication()
    if (!verificated) navigate('/login')
    else setAuthenticated(true)
  })

  return authenticated ? children : <h1>Loading</h1>
}