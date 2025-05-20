import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ThirdCategorySchema = new Schema({
    CategoryId: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    SubCategoryId: {
        type: Schema.Types.ObjectId,
        ref: "SubCategory"
    },
    ThirdCategory: {
        type: String
    },
    Satus: {
        type: String,
        default: "Active"
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    }
})

const ThirdCategory = new mongoose.model("ThirdCategory", ThirdCategorySchema);

export default ThirdCategory;