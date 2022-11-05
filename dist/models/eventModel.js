"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const eventSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Name field is required"],
        trim: true,
    },
    category: {
        type: String,
        enum: ["event", "course", "experience", "shop"],
        default: null,
    },
    description: { type: String, default: null },
    date: {
        type: {
            start: { type: Date },
            end: { type: Date },
        },
        required: [true, "Date field is required"],
    },
    image: { type: String, default: null },
    tags: { type: Array },
    type: { type: String, enum: ["online", "local"] },
});
const Event = mongoose_1.default.model("Event", eventSchema);
exports.default = Event;
