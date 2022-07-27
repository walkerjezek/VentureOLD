const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Activity {
    _id: ID!
    name: String!
  }

  type Matchup {
    _id: ID!
    tech1: String!
  }

  type Query {
    tech: [Tech]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
  }
`;

module.exports = typeDefs;
