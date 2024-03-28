import { Schema, models, model, Document } from "mongoose";

export interface ICountry extends Document {
  name: string;
  code: string;
}

const CountrySchema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
});

const Country = models.Country || model<ICountry>("Country", CountrySchema);

export default Country;
