import mongoose, {Schema, Types} from "mongoose";
import Interest from "./interestModel";

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title field is required"],
        trim: true,
    },
    subtitle: {
        type: String,
        trim: true,
    },
    image: {type: String, default: null},
    address: {
        type: {
            city: {type: String, required: [true, "City field is required"]},
            // country: {type: String, required: [true, "Country field is required"]},
            formatted: {type: String},
            lat: {type: Number, required: [true, "Lat field is required"]},
            lng: {type: Number, required: [true, "Lng field is required"]},
            streetNumber: {type: Number, required: [true, "Number field is required"]},
            state: {type: String, required: [true, "State field is required"]},
            street: {type: String, required: [true, "Street field is required"]},
            zip: {type: String, required: [true, "Zip field is required"]}
        },
        required: [true, "Address field is required"],
    },
    interestListSelected: {
        type: [Interest.schema],
        required: [true, "InterestListSelected field is required"],
    },
    seats: {
        type:{
            max: { type: Number, required: [true, "Max field is required"] },
            min: { type: Number, required: [true, "Min field is required"] },
            current: { type: Number, required: [true, "Current field is required"] },
            gender: { type: String, required: [true, "Gender field is required"] }
        },
        required: [true, "Address field is required"],
    },
    category: {
        type: String,
        enum: ["event", "course", "experience", "shop"],
        default: null,
    },
    description: {type: String, default: null},
    date: {
        type: {
            start: {type: Date, required:[true, "StartDate field is required"]},
            end: {type: Date, required:[true, "EndDate field is required"]},
        },
        required: [true, "Date field is required"],
    },
    tags: {type: Array, required:[true, "Tags field is required"]},
    type: {type: String, enum: ["online", "local"], required:[true, "Type field is required"]},
}, {strict: false});

const Event = mongoose.model("Event", eventSchema);

export default Event;
