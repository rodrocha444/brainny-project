import jwtDecode from "jwt-decode";
import { UsersPermissionsLoginInput, UsersPermissionsLoginPayload } from "../gql/graphql";
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

  localStorage.setItem('token', result.data?.login.jwt || '')

  return result.data?.login.user.role?.type!
}

export function logout() {
  localStorage.removeItem('token')
  client.resetStore()
}

export function authenticate() {
  try {
    const result = jwtDecode(localStorage.getItem('token') || '') as { id: number }
    return result.id ? true : false
  } catch (e) {
    console.error(e)
    return false
  }
}


export async function getRegisteredTimes(id?: number) {
  const decodedToken = jwtDecode(localStorage.getItem('token')!) as { id: number }

  if (id) {
    return await client.query({
      query: GET_REGISTERED_TIMES,
      variables: {
        id: decodedToken.id.toString()
      }
    }).then(result => result.data.registeredTimes)
  }
  else {
    return await client.query({
      query: GET_REGISTERED_TIMES_ALL,
    }).then(result => result.data.registeredTimes)
  }
}

export async function registerTime() {
  const decodedToken = jwtDecode(localStorage.getItem('token')!) as { id: number }
  const date = new Date().toISOString()

  try {
    return await client.mutate({
      mutation: REGISTER_TIME,
      variables: {
        id: decodedToken.id.toString(),
        date,
      }
    })
  } catch (err) {
    throw err;
  }
}