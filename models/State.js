import mongoose from "mongoose";
const Schema = mongoose.Schema;

const StateSchema = new Schema({
    CountryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Country"
    },
    State: {
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

const State =  mongoose.model("State", StateSchema);

export default State;