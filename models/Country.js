import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
    Country: {
        type: String,
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

const Country =  mongoose.model("Country", CountrySchema);

export default Country;