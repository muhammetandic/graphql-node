import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const authorSchema = new mongoose.Schema({
  id: ObjectId,
  firstName: String,
  lastName: String
});

export default mongoose.model("Author", authorSchema);