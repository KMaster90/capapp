import { NextFunction, Request, Response } from "express";
import Event from "../models/eventModel";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";
import successRes from "../utils/succesRes";

export const getAllEvents = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const events = await Event.find({});
    successRes(res, events);
  }
);

export const getOneEvent = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const events = await Event.find({ _id: req.params.id });
    successRes(res, events);
  }
);

export const createEvent = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const newEvent = await Event.create(req.body);
    successRes(res, newEvent);
  }
);

export const updateEvent = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const updatedEvent = await Event.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedEvent) {
      return next(
        new AppError("No ingredient found with this ID", 404)
      );
    }

    successRes(res, updatedEvent);
  }
);
