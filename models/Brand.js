import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BrandSchema = new Schema({
    Brand: {
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

const Brand = new mongoose.model("Brand",BrandSchema);

export default Brand