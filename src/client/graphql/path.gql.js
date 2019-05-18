import gql from 'graphql-tag';

const getLocationsQuery = gql`
  query getLocations {
    locations: getLocations
  }
`;

const getShortestPathQuery = gql`
query getShortestPath($source: String!, $destination: String!, $filter: String!) {
  locations: getShortestPath(source: $source, destination: $destination, filter: $filter) {
    from
    to
    mode
    cost
    duration {
      h
      m
    }
  }
}
`;

export { getLocationsQuery, getShortestPathQuery };
