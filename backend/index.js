import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import toursRouter from "./routers/tours.js";
import usersRouter from "./routers/users.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// testing testing
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// connect to mongodb
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);

    console.log("MongoDB connection failed");
  }
};

// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/tours", toursRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  connect();
  console.log(`Server is running on port: ${port}`);
});
