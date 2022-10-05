import { gql } from "@apollo/client";

export interface LOGIN_MUTATION_VARIABLES {
  identifier: string
  password: string
}
export const LOGIN_MUTATION = gql`
  mutation($identifier: String!, $password: String!){
    login(input:{
      identifier: $identifier,
      password: $password
    }){
      jwt
      user{
        username
        confirmed
        role{
          type
        }
      }
    }
  }
`
// mutation{
//   login(input:{identifier:"admin@brainny.cc",password:"adminregister"}){
//     jwt
//     user{
//       username
//       confirmed
//       role{
//         type
//       }
//     }
//   }
// }