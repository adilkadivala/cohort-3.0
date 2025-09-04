import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
});

export const UserModel = model("users", UserSchema);
