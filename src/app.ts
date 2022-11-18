import express, { json, urlencoded } from "express";
import cors from "cors";
import path from "path";
import { rootDir } from "./utils/path";
import eventRoutes from "./routes/eventRoutes";
import globalErrorHandler from "./utils/globalErrorHandler";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:8100"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(json());
app.use(urlencoded({ extended: false }));

app.use(express.static(path.join(rootDir, "public")));

app.use("/api/v1/events", eventRoutes);

app.use(globalErrorHandler);

export default app;
