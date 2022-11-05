"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEvent = void 0;
const eventModel_1 = __importDefault(require("../models/eventModel"));
const createEvent = async (req, res, next) => {
    try {
        const newEvent = await eventModel_1.default.create(req.body);
        res.status(201).json({ status: "success", event: newEvent });
    }
    catch (err) {
        res.status(404).json({ status: "fail", message: err });
    }
};
exports.createEvent = createEvent;
