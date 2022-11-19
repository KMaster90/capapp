import { NextFunction, Request, Response } from "express";
import Interest from "../models/interestModel";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";
import successRes from "../utils/succesRes";

export const getAllInterests = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const events = await Interest.find({});
    successRes(res, events);
  }
);

export const getOneInterest = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const events = await Interest.find({ _id: req.params.id });
    successRes(res, events);
  }
);

export const createInterest = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const newEvent = await Interest.create(req.body);
    successRes(res, newEvent);
  }
);

export const updateInterest = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const updatedEvent = await Interest.findOneAndUpdate(
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
