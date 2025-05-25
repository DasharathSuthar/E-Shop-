import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    CategoryId: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    SubCategoryId: {
        type: Schema.Types.ObjectId,
        ref: "SubCategory"
    },
    ThirdCategoryId: {
        type: Schema.Types.ObjectId,
        ref: "ThirdCategory"
    },
    BrandId: {
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