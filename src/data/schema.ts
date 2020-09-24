import { gql } from 'apollo-server';

const typeDefs = gql`
    type Game {
        id: ID!
        name: String!
        description: String!
        supportedOS: [String]
        versions: [String]
        links: [String]
    }

    type Query {
        games: [Game]
    }
`;

export default typeDefs;
