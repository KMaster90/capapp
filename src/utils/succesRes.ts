import { Response } from "express";

const successRes = (res: Response, data: Object) => {
  return res.status(201).json({ status: "success", data });
};

export default successRes;
