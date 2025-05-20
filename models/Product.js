import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    Category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    SubCategory: {
        type: Schema.Types.ObjectId,
        ref: "SubCategory"
    },
    ThirdCategory: {
        type: Schema.Types.ObjectId,
        ref: "ThirdCategory"
    },
    Brand: {
        type: Schema.Types.ObjectId,
        ref: "Brand"
    },
    ProductName: {
        type: String
    },
    Price: {
        type: Number
    },
    Discription: {
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

const Product = new mongoose.model("Product",ProductSchema);

export default Product;