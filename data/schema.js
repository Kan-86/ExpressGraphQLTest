import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './resolvers';

const typeDefs = `
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        email: String
        contacts: [Contact]
    }

    type Contact {
        firstName: String
        lastname: String
    }

    enum Gender {
        MALE
        FEMALE
    }

    type Query {
        getFriend(id: ID): Friend
    }

    input FriendInput {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        email: String
        contacts: [ContactInput]
    }

    input ContactInput {
        firstName: String
        lastName: String
    }

    type Mutation {
        createFriend(input: FriendInput) : Friend
        updateFriend(input: FriendInput) : Friend
    }
`;

const schema = makeExecutableSchema({typeDefs, resolvers});

export  {schema};