import Post from "../models/post.js";

export const createPost = async (paramPost) => {
  const newPost = new Post(paramPost.post);
  return await newPost.save();
}

export const updatePost = async (paramPost) => {
  const post = await Post.findById(paramPost.post._id);
  await post.updateOne(paramPost);
  return post;
}

export const deletePost = async (id) => {
  const post = await Post.findById(id);
  if (post !== null)
    post.delete();
  return;
}

export const getPosts = async () => {
  const posts = await Post.find();
  return posts;
}

export const getPost = async (id) => {
  const post = await Post.findById(id);
  return post;
}

export const getPostsByAuthorId = async (authorId) => {
  const posts = await Post.find({ authorId: authorId });
  return posts;
}