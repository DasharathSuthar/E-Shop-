import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AreaSchema = new Schema({
    StateId: {
        type: Schema.Types.ObjectId,
        ref: "State"
    },
    CityId: {
        type: Schema.Types.ObjectId,
        ref: "City"
    },
    Area: {
        type: String
    },
    Status: {
        type: String,
        default: "Active"
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    }
})

const Area = new mongoose.model("Area", AreaSchema);

export default Area;