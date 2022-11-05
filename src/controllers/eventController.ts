import { RequestHandler } from "express";
import Event from "../models/eventModel";

export const createEvent: RequestHandler = async (req, res, next) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201).json({ status: "success", event: newEvent });
  } catch (err) {
    res.status(404).json({ status: "fail", message: err });
  }
};
