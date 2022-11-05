import mongoose from "mongoose";
import app from "./app";

import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

const DB = process.env.DATABASE;

const port = process.env.PORT;
const server = app.listen(port, () =>
  console.log(`App running on port ${port}`)
);

mongoose
  .connect(DB as string)
  .then(() => {
    console.log("Database connection successfull");
  })
  .catch(() => {
    console.log("Connection Error");
    process.exit(1);
  });

process.on("uncaughtException", (err) => {
  console.log("UNHANDLED EXCEPTION! Shutting down..");
  console.log(err.name, err.message);
  process.exit(1);
});

process.on("unhandledRejection", (err: Error) => {
  console.log("UNHANDLED REJECTION! Shutting down..");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("SIGTERM RECEIVED. Shutting down...");
  server.close(() => {
    console.log("Process terminated!");
  });
});
