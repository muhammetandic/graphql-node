import { gql } from "apollo-server-express";
const typeDefs = gql`
  type Author {
    _id: String!
    firstName: String
    lastName: String
    posts: [Post]
  }

  type Post {
    _id: String!
    title: String
    content: String
    authorId: String!
    votes: Int
  }

  input AuthorData {
    _id: String
    firstName: String
    lastName: String
  }

  input PostData {
    _id: String
    title: String
    content: String
    authorId: String!
    votes: Int
  }

  type Response {
    success: Boolean
  }

  type Query {
    authors: [Author]
    author(id: String!): Author

    posts: [Post]
    post(id: String!): Post
  }

  type Mutation {
    createAuthor(author: AuthorData!): Response
    updateAuthor(author: AuthorData!): Response
    deleteAuthor(id: String!): Response

    createPost(post: PostData!): Response
    updatePost(post: PostData!): Response
    deletePost(id: String!): Response
  }
`;
export default typeDefs;
