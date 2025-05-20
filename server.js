import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import CategoryRoute from './Routes/CategoryRoute.js'
import SubCategoryRoute from './Routes/SubCategoryRoute.js'
import ThirdCategoryRoute from './Routes/ThirdCategoryRoute.js'
import Brand from './Routes/BrandRoute.js'
import Product from './Routes/ProductRoute.js'
import Specification from './Routes/SpecificationRoute.js'
import SpecificationOption from './Routes/SpecificationOptionRoute.js'

const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

app.use("/category", CategoryRoute)
app.use("/subCategory",SubCategoryRoute)
app.use("/thirdCategory",ThirdCategoryRoute)
app.use("/brand",Brand)
app.use("/product",Product)
app.use("/specification",Specification)
app.use("/specificationOption",SpecificationOption)

const MongoURL = "mongodb://127.0.0.1:27017/E-ShopDB"

async function main() {
    await mongoose.connect(MongoURL);
}

main().then(() => {
    console.log("MongoDB Connected Succsessfully.");
}).catch(err => {
    console.log(err);
})

app.listen(8080, () => {
    console.log("App in listening on port 8080");
})
