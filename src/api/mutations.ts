import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation($email: String!, $password: String!){
    login(input:{
      identifier: $email,
      password: $password
    }){
      jwt
      user{
        id
        email
        role{
          type
        }
      }
    }
  }
`