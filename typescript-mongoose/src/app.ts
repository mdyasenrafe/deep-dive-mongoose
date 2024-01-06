import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

// application routes
import userRoute from "./app/modules/user/user.route";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

// Undefined Route Implement
app.use((req, res, next) => {
  res
    .status(404)
    .json({ status: 404, error: true, message: "Not Found this route" });
});

export default app;
