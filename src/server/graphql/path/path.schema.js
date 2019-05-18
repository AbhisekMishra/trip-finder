const { gql } = require('apollo-server');

export default gql`
  scalar Date

  extend type Query {
    getLocations: [String]
    getShortestPath(source: String!, destination: String!, filter: String!): [Path]
  }

  type Path {
      from: String
      to: String
      mode: String
      cost: Int
      duration: Time
  }

  type Time {
      h: String
      m: String
  }
`;
