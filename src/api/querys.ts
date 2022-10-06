import { gql } from "@apollo/client";

export const GET_USERS_EMAIL = gql`
  {
    users{
      email
    }
  }
`