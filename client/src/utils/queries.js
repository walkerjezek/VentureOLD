import { gql } from '@apollo/client';

export const QUERY_ACTIVITY = gql`
  query activities {
    activity {
      _id
      name
    }
  }
`;


