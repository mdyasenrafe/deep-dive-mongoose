import { HydratedDocument, Model } from "mongoose";

export interface UserType {
  id: string;
  name: string;
  email: string;
  gender: "male" | "female" | "other";
  status: "active" | "inactive";
  phoneNumber: {
    countryCode: string;
    number: string;
  };
  age: Number;
}
export interface UserMethods {
  fullNumber: () => string;
}

export interface UserModelType extends Model<UserType, {}, UserMethods> {
  getActiveUsers: () => Promise<HydratedDocument<UserType>[]>;
}
