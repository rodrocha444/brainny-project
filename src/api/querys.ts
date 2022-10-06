import { gql } from "@apollo/client";

export const GET_REGISTERED_TIMES = gql`
  query getRegisteredTimes($id: String!){
    registeredTimes(where: { user: { id: $id }}){
      created_at
      id
      user{
        name
      }
    }
  }
`

export const GET_REGISTERED_TIMES_ALL = gql`
  query getRegisteredTimes{
    registeredTimes{
      created_at
      id
      user{
        name
      }
    }
  }
`