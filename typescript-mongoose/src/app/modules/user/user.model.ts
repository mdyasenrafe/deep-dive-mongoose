import { Schema, model, Model } from "mongoose";
import { UserType, UserMethods } from "./user.interface";

type UserModelType = Model<UserType, {}, UserMethods>;

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
});

userSchema.method("fullNumber", function fullNumber() {
  return `${this.phoneNumber.countryCode}${this.phoneNumber.number}`;
});
const UserModel = model<UserType, UserModelType>("user", userSchema);

export default UserModel;
