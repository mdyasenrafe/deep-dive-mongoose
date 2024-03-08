import { Request, Response } from "express";
import {
  createUserToDB,
  getActiveUsersFromDB,
  getUserByIdFromDB,
  getUsersFromDB,
} from "./user.service";

export const createUser = async (req: Request, res: Response) => {
  try {
    // body data looks like
    const data = req.body;
    const user = await createUserToDB(data);
    return res.status(201).json({ status: "success", data: user });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};
export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await getUsersFromDB();
    return res
      .status(200)
      .json({ status: "success", count: users.length, data: users });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getUserByIdFromDB(id);
    return res.status(200).json({ status: "success", data: user });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

export const getActiveUsers = async (req: Request, res: Response) => {
  try {
    const users = await getActiveUsersFromDB();
    return res.status(200).json({ status: "success", data: users });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};
