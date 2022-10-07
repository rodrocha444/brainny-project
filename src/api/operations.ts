import jwtDecode from "jwt-decode";

import {
  UsersPermissionsLoginInput,
  UsersPermissionsLoginPayload
} from "../gql/graphql";
import { client } from "./config";
import { LOGIN_MUTATION, REGISTER_TIME } from "./mutations";
import { GET_REGISTERED_TIMES, GET_REGISTERED_TIMES_ALL } from "./querys";

export async function login(email: string, password: string) {
  const result = await client.mutate<{ login: UsersPermissionsLoginPayload }, UsersPermissionsLoginInput>({
    mutation: LOGIN_MUTATION,
    variables: {
      identifier: email,
      password: password
    }
  })
  const jwtTokenRecieved = result.data?.login.jwt || ''
  const userType = result.data?.login.user.role?.type

  localStorage.setItem('token', jwtTokenRecieved)
  return userType
}

export function logout() {
  localStorage.removeItem('token')
  client.resetStore()
}

export function authenticate() {
  try {
    const result = jwtDecode(localStorage.getItem('token') || '') as { id: number }
    return result.id ? true : false //Verificando se o token decodificado tem a propriedare id
  } catch (e) {
    console.error(e)
    return false
  }
}


export async function getRegisteredTimes(id?: number) {
  const decodedToken = jwtDecode(localStorage.getItem('token')!) as { id: number }

  if (id) {
    const result = await client.query({
      query: GET_REGISTERED_TIMES,
      variables: {
        id: decodedToken.id.toString()
      }
    })
    const data = await result.data.registeredTimes
    return data
  }
  else {
    const result = await client.query({
      query: GET_REGISTERED_TIMES_ALL,
    })
    const data = await result.data.registeredTimes
    return data
  }
}

export async function registerTime() {
  const decodedToken = jwtDecode(localStorage.getItem('token')!) as { id: number }
  const id = decodedToken.id.toString()
  const date = new Date().toISOString()

  try {
    return await client.mutate({
      mutation: REGISTER_TIME,
      variables: { id, date }
    })
  } catch (err) {
    console.error(err)
  }
}