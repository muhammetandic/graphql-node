import { createAuthor, deleteAuthor, getAuthor, getAuthors, updateAuthor } from "../services/author.service.js";
import { createPost, deletePost, getPost, getPosts, getPostsByAuthorId, updatePost } from "../services/post.service.js";

let posts = [
  { id: 1, authorId: 1, title: "Introduction to GraphQL", votes: 2 },
  { id: 2, authorId: 2, title: "Welcome to Meteor", votes: 3 },
  { id: 3, authorId: 2, title: "Advanced GraphQL", votes: 1 },
  { id: 4, authorId: 3, title: "Launchpad is Cool", votes: 7 },
];

export default {
  Query: {
    authors: () => getAuthors(),
    author: (parent, { id }) => getAuthor(id),
    posts: () => getPosts(),
    post: (parent, { id }) => getPost(id),
  },

  Author: {
    posts(parent) {
      return getPostsByAuthorId(parent._id);
    }
  },

  Mutation: {
    createAuthor: (parent, newAuthor) => {
      createAuthor(newAuthor);
      let result = {
        success: true
      };
      return result;
    },

    updateAuthor: (parent, editedAuthor) => {
      updateAuthor(editedAuthor);
      const result = {
        success: true
      };
      return result;
    },

    deleteAuthor: (parent, { id }) => {
      deleteAuthor(id);
      return { success: true };
    },

    createPost: (parent, newPost) => {
      createPost(newPost);
      let result = {
        success: true
      };
      return result;
    },

    updatePost: (parent, editedPost) => {
      updatePost(editedPost);
      let result = {
        success: true
      };
      return result
    },

    deletePost: (parent, { id }) => {
      deletePost(id)
      let result = {
        success: true
      };
      return result;
    }
  }
}