import express from "express";
import { createUser, getUser, getUserById } from "./user.controller";

const router = express.Router();

router.get("/getUsers", getUser);
router.get("/getUser/:id", getUserById);
router.post("/create", createUser);

export default router;
