import express from "express";
import {
  createUser,
  getActiveUsers,
  getUser,
  getUserById,
} from "./user.controller";

const router = express.Router();

router.get("/getUsers", getUser);
router.get("/getUser/:id", getUserById);
router.get("/getActiveUsers", getActiveUsers);
router.post("/create", createUser);

export default router;
