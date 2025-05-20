import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    Category: {
        type: String,
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

const Category = new mongoose.model("Category", CategorySchema);

export default Category;