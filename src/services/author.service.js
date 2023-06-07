import Author from "../models/author.js";

export const createAuthor = async (paramAuthor) => {
  const newAuthor = new Author(paramAuthor.author);
  return await newAuthor.save();
};

export const updateAuthor = async (paramAuthor) => {
  const author = await Author.findById(paramAuthor.author._id);
  await author.updateOne(paramAuthor.author);
  return author;
};

export const deleteAuthor = async (id) => {
  const author = await Author.findById(id);
  if (author !== null) await author.delete();
  return;
};

export const getAuthor = async (id) => {
  const author = await Author.findById(id);
  return author;
};

export const getAuthors = async () => {
  const authors = await Author.find();
  return authors;
};
