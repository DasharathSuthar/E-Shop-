import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SubCategorySchema = new Schema({
    CategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    SubCategory: {
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

const SubCategory =  mongoose.model("SubCategory", SubCategorySchema);

export default SubCategory;