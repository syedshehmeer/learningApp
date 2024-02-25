import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import cookieParser from "cookie-parser";
import {
  notFound,
  errorHandler,
} from "./backend/middleware/errorMiddleware.js";
import connectDB from "./backend/config/db.js";
const port = process.env.PORT || 5000;
import userRoutes from "./backend/routes/userRoutes.js";

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: "https://learning-app-blond.vercel.app/", // Replace with your allowed origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

// Use CORS middleware with options
app.use(cors(corsOptions));

app.use(cookieParser());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server is ready.."));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
