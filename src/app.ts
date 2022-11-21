import express, { json, urlencoded } from "express";
import cors from "cors";
import path from "path";
import { rootDir } from "./utils/path";
import eventRoutes from "./routes/eventRoutes";
import globalErrorHandler from "./utils/globalErrorHandler";
import interestRoutes from "./routes/interestRoutes";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:8100"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: false}));

app.use(express.static(path.join(rootDir, "public")));


app.use("/api/v1/events", eventRoutes);
app.use("/api/v1/interests", interestRoutes);

app.use(globalErrorHandler);


export default app;
