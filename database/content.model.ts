import { Schema, models, model, Document } from "mongoose";

export interface ICategory extends Document {
  title: string;
  content: string;
  categories: Schema.Types.ObjectId[];
  views: number;
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId;
  createdAt: Date;
}

const CategorySchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  views: { type: Number, default: 0 },
  upvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

const Category = models.Category || model("Category", CategorySchema);

export default Category;
