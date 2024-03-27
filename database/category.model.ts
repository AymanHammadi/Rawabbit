import { Schema, model, models, Document } from "mongoose";

export interface ICategory extends Document {
  name: string;
  description: string;
  contents: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  createdOn: Date;
  country: string;
}

const CategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  description: { type: String, required: true },
  contents: [{ type: Schema.Types.ObjectId, ref: "Content" }],
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdOn: { type: Date, default: Date.now },
});

const Category = models.Category || model("Category", CategorySchema);

export default Category;
