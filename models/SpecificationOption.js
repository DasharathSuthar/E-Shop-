import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SpecificationOptionSchema = new Schema({
    SpecificationId: {
        type: Schema.Types.ObjectId,
        ref: "Specification"
    },
    Value: {
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

const SpecificationOption = new mongoose.model("SpecificationOption", SpecificationOptionSchema);

export default SpecificationOption;