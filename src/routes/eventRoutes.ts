import express from "express";
import * as eventControllers from "../controllers/eventController";

const router = express.Router();

router.route("/").post(eventControllers.createEvent);

export default router;
