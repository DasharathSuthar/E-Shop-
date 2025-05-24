import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    Category: {
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

const Category =  mongoose.model("Category", CategorySchema);

export default Category;