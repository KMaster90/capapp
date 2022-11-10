import { RequestHandler } from "express";

const catchAsync: (prop: Function) => RequestHandler = (
  fn: Function
) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

export default catchAsync;
