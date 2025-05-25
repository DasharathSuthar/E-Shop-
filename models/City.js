import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    CountryId: {
        type: Schema.Types.ObjectId,
        ref: "Country"
    },
    StateId: {
        type: Schema.Types.ObjectId,
        ref: "State"
    },
    City: {
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

const City = new mongoose.model("City", CitySchema);

export default City;