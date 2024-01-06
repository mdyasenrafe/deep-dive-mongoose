import { UserType } from "./user.interface";
import UserModel from "./user.model";

export const createUserToDB = async (payload: UserType): Promise<UserType> => {
  const user = await UserModel.create(payload);
  const fullNumber: string = user.fullNumber();
  console.log(fullNumber);
  return user;
};

export const getUsersFromDB = async (): Promise<UserType[]> => {
  const users = await UserModel.find();
  return users;
};

export const getUserByIdFromDB = async (
  id: string
): Promise<UserType | null> => {
  const user = await UserModel.findOne(
    { id: id },
    {
      password: 0,
      __v: 0,
      _id: 0,
    }
  );
  return user;
};
