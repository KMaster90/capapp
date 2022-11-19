import mongoose from "mongoose";

const interestSchema = new mongoose.Schema({
    label: {type: String, required: [true, "Label field is required"]},
    icon: {type: String, required: [true, "Icon field is required"]}
}, {strict: false});

const Interest = mongoose.model("Interest", interestSchema);

export default Interest;
