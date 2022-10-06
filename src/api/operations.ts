import jwtDecode from "jwt-decode";
import { UsersPermissionsLoginInput, UsersPermissionsLoginPayload, RegisteredTime } from "../gql/graphql";
import { client } from "./config";
import { LOGIN_MUTATION } from "./mutations";
import { GET_REGISTERED_TIMES, GET_REGISTERED_TIMES_ALL } from "./querys";

export async function login(email: string, password: string) {
  const result = await client.mutate<{ login: UsersPermissionsLoginPayload }, UsersPermissionsLoginInput>({
    mutation: LOGIN_MUTATION,
    variables: {
      identifier: email,
      password
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
    jwtDecode(localStorage.getItem('token')!)
    return true
  } catch (err) {
    console.log(err)

    return false
  }
}


export async function getRegisteredTimes(id?: number) {
  if (id) {
    return await client.query({
      query: GET_REGISTERED_TIMES,
      variables: {
        id: id.toString()
      }
    }).then(result=> result.data.registeredTimes)
  }
  else {
    return await client.query({
      query: GET_REGISTERED_TIMES_ALL,
    }).then(result=> result.data.registeredTimes)
  }
}
