import { gql } from '@apollo/client'

export const LOGIN_MUTATION = gql`
  mutation login($identifier:String!, $password:String!) {
    login(input: {
      identifier: $identifier,
  	  password: $password
    }){
      jwt
      user{
        role{
          type
        }
      }
    }
  }
`

export const REGISTER_TIME = gql`
  mutation registerTime($id: ID!, $date: DateTime!){
    createRegisteredTime(input:{
      data:{
        user: $id,
        timeRegistered: $date,
        published_at: $date,
        created_by: $id,
        updated_by: $id
      }
    }){
      registeredTime{
        created_at
        id
        user{
          name
        }
      }
    }
  }
`