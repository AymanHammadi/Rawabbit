import mongoose, { Schema, Document } from "mongoose";

// Enum definition
export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}


// Define interfaces for each model
interface IUser extends Document {
  name?: string;
  email?: string;
  emailVerified?: Date;
  image?: string;
  password?: string;
  role: UserRole;
  accounts: IAccount["_id"][];
  isTwoFactorEnabled: boolean;
  twoFactorConfirmation?: ITwoFactorConfirmation["_id"];
}

interface IAccount extends Document {
  userId: IUser["_id"];
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string;
  access_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;
}

interface IVerificationToken extends Document {
  email: string;
  token: string;
  expires: Date;
}

interface IPasswordResetToken extends Document {
  email: string;
  token: string;
  expires: Date;
}

interface ITwoFactorToken extends Document {
  email: string;
  token: string;
  expires: Date;
}

interface ITwoFactorConfirmation extends Document {
  userId: IUser["_id"];
}

// Define Mongoose schemas
const UserSchema: Schema = new Schema({
  name: String,
  email: { type: String, unique: true },
  emailVerified: Date,
  image: String,
  password: String,
  role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },
  accounts: [{ type: Schema.Types.ObjectId, ref: "Account" }],
  isTwoFactorEnabled: { type: Boolean, default: false },
  twoFactorConfirmation: {
    type: Schema.Types.ObjectId,
    ref: "TwoFactorConfirmation",
  },
});

const AccountSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  type: String,
  provider: String,
  providerAccountId: String,
  refresh_token: String,
  access_token: String,
  expires_at: Number,
  token_type: String,
  scope: String,
  id_token: String,
  session_state: String,
});

const VerificationTokenSchema: Schema = new Schema({
  email: { type: String, unique: true },
  token: { type: String, unique: true },
  expires: Date,
});

const PasswordResetTokenSchema: Schema = new Schema({
  email: { type: String, unique: true },
  token: { type: String, unique: true },
  expires: Date,
});

const TwoFactorTokenSchema: Schema = new Schema({
  email: { type: String, unique: true },
  token: { type: String, unique: true },
  expires: Date,
});

const TwoFactorConfirmationSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", unique: true },
});

// Define and export models
export const UserModel = mongoose.model<IUser>("User", UserSchema);
export const AccountModel = mongoose.model<IAccount>("Account", AccountSchema);
export const VerificationTokenModel = mongoose.model<IVerificationToken>(
  "VerificationToken",
  VerificationTokenSchema
);
export const PasswordResetTokenModel = mongoose.model<IPasswordResetToken>(
  "PasswordResetToken",
  PasswordResetTokenSchema
);
export const TwoFactorTokenModel = mongoose.model<ITwoFactorToken>(
  "TwoFactorToken",
  TwoFactorTokenSchema
);
export const TwoFactorConfirmationModel =
  mongoose.model<ITwoFactorConfirmation>(
    "TwoFactorConfirmation",
    TwoFactorConfirmationSchema
  );
