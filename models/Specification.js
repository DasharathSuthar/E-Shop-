import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SpecificationSchema = new Schema({
    SpecificationName: {
        type: String
    },
    SpecificationType: {
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

const Specification = new mongoose.model("Specification",SpecificationSchema);

export default Specification;