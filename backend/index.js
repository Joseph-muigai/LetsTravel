import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import toursRouter from "./routers/tours.js";
import usersRouter from "./routers/user.js";
import authRouter from "./routers/auth.js";
import reviewRouter from "./routers/reviews.js";
import bookingRouter from "./routers/booking.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const corsOptions = {
  origin: true,
  credentials: true,
};

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
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/auth", authRouter);
app.use("/tours", toursRouter);
app.use("/users", usersRouter);
app.use("/review", reviewRouter);
app.use("/booking", bookingRouter);

app.listen(port, () => {
  connect();
  console.log(`Server is running on port: ${port}`);
});
