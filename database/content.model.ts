import { Schema, models, model, Document } from "mongoose";

export interface IContent extends Document {
  title: string;
  content: string;
  picture: string;
  categories: Schema.Types.ObjectId[];
  views: number;
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId;
  createdAt: Date;
  country: Schema.Types.ObjectId;
  website?: string; // Optional website field
  iosAppLink?: string; // Optional iOS app link field
  androidAppLink?: string; // Optional Android app link field
}

const ContentSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  picture: { type: String, required: true },
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  views: { type: Number, default: 0 },
  upvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  country: { type: Schema.Types.ObjectId, ref: "Country" },
  website: { type: String },
  iosAppLink: { type: String },
  androidAppLink: { type: String },
});

const Content = models.Category || model("Category", ContentSchema);

export default Content;
