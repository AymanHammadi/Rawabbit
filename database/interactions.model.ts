import { Schema, model, models, Document } from "mongoose";

export interface IInteraction extends Document {
  user: Schema.Types.ObjectId; // refence to user
  action: string;
  content: Schema.Types.ObjectId; // reference to question
  categories: Schema.Types.ObjectId[]; // reference to tag
  createdAt: Date;
}

const InteractionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  action: { type: String, required: true },
  content: { type: Schema.Types.ObjectId, ref: "Content" },
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  createdAt: { type: Date, default: Date.now },
});

const Interaction =
  models.Interaction || model("Interaction", InteractionSchema);

export default Interaction;
