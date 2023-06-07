import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const postSchema = new mongoose.Schema({
  id: ObjectId,
  title: String,
  content: String,
  authorId: ObjectId,
  votes: Number,
});

export default mongoose.model("Post", postSchema);
