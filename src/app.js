import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN || "*",
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static("public"));

console.log("User routes loaded");

/**---------------::Routes import::-------------- */
import userRouter from "./routes/user.routes.js";

app.use("/api/v1/user", userRouter);

export { app };