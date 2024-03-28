import { Schema, models, model, Document } from "mongoose";

export interface ICommnet extends Document {
  author: Schema.Types.ObjectId;
  content: Schema.Types.ObjectId;
  contents: string;
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  createdAt: Date;
}

const CommnetSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  contnet: {
    type: Schema.Types.ObjectId,
    ref: "Content",
    required: true,
  },
  contents: {
    type: String,
    required: true,
  },
  upvotes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  downvotes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Commnet = models.Commnet || model("Commnet", CommnetSchema);

export default Commnet;
