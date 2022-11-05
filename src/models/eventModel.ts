import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
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

const Event = mongoose.model("Event", eventSchema);

export default Event;
