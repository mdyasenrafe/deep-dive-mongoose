import { Schema, model, Model } from "mongoose";
import { UserType, UserMethods, UserModelType } from "./user.interface";

const userSchema = new Schema<UserType>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
  },
  phoneNumber: {
    countryCode: {
      type: String,
    },
    number: {
      type: String,
    },
  },
  age: {
    type: Number,
  },
});

userSchema.method("fullNumber", function fullNumber() {
  return `${this.phoneNumber.countryCode}${this.phoneNumber.number}`;
});
userSchema.static("getActiveUsers", async function getActiveUsers() {
  const users = await this.find({ status: "active" });
  return users;
});
const UserModel = model<UserType, UserModelType>("user", userSchema);

export default UserModel;
