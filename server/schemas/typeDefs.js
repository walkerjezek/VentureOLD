const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Activity {
    _id: ID!
    name: String!
    skill: String!
  }

  type Matchup {
    _id: ID!
    tech1: String!
  }

  type Query {
    activity: [Activity]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
  }
`;

module.exports = typeDefs;
