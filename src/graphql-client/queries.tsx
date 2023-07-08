import { gql } from "@apollo/client/core";

export const GET_INTRO = gql`
  query {
      homeIntro {
          headline
          descriptions {
              id
              title
              functionality
              icon
              action,
              route
          }
      }
  }

`;