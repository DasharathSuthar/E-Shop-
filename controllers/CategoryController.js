import Category from "../models/Category.js";

class CategoryController {
    async insertData(body) {
        try {
           
            const existingData = await Category.findOne({ Category: body.Category }); 
            if (existingData) {
                return {
                    Message: "Category already exists",
                    Code: 409
                };
            }

            const newData = new Category(body);
            const savedData = await newData.save();

            return {
                Message: "Data inserted successfully",
                Data: savedData,
                Code: 200
            };
        } catch (error) {
            return {
                Message: "Something went wrong",
                Error: error,
                Code: 500
            };
        }
    }


    async getData() {
        try {
            var data = await Category.find({});
            return ({
                Message: "Data Geted",
                Data: data,
                Code: 200
            })
        } catch (error) {
            return ({
                Message: "Something went Wrong",
                Error: error,
                Code: 500
            })
        }
    }
    async getDataById(id) {
        try {
            var idData = await Category.findById(id);
            return ({
                Message: "Data Geted By Id",
                Data: idData,
                Code: 200
            })
        } catch (error) {
            return ({
                Message: "Something went Wrong",
                Error: error,
                Code: 500
            })
        }
    }

    deleteData = async (id) => {
        try {
            const idData = await Category.findByIdAndDelete(id);
            return ({
                Data: idData,
                Message: "Data Deleted",
                Code: 200
            })
        } catch (error) {
            console.log(error);
            return ({
                Error: error,
                Message: "Something Wrong",
                Code: 500
            })
        }
    }

    updateData = async (id, body) => {
        try {
            const updateData = await Category.findByIdAndUpdate(id, body);
            return ({
                Data: updateData,
                Message: "Data Updated",
                Code: 200
            })
        } catch (error) {
            console.log(error);
            return ({
                Error: error,
                Message: "Something Wrong",
                Code: 500
            })
        }
    }
}

export default CategoryController