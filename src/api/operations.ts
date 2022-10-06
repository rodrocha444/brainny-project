import jwtDecode from "jwt-decode";
import { client } from "./config";
import { LOGIN_MUTATION } from "./mutations";

export async function login(email: string, password: string) {
  const result = await client.mutate({
    mutation: LOGIN_MUTATION,
    variables: { email: email, password: password }
  })

  if (result.errors) return result.errors
  return result.data
}

export function verifyAuthentication() {
  try {
    const token = localStorage.getItem('token') || ''
    const decodedToken: any = jwtDecode(token)
    if (decodedToken.id) return true
  }
  catch (err) {
    return false
  }
}

export function logout() {
  localStorage.removeItem('token')
}