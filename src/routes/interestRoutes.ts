import express from "express";
import * as interestControllers from "../controllers/interestController";

const router = express.Router();

router.route("/")
    // .post(interestControllers.createEvent)
    .get(interestControllers.getAllInterests);

export default router;