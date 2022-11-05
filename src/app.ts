import express, { json, urlencoded } from "express";
import cors from "cors";
import path from "path";
import { rootDir } from "./utils/path";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:4200"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(json());
app.use(urlencoded({ extended: false }));

app.use(express.static(path.join(rootDir, "public")));

export default app;
