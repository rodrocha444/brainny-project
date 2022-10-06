import { Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../../api/operations";

export function ProtectedLayout({ children }: { children: JSX.Element }) {
  const [passed, setPassed] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    authenticate() ? setPassed(true) : navigate('/login')
  }, [])

  return passed ? children : <Center>Loading</Center>
}