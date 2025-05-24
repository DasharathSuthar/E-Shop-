
import SubCategory from "../models/SubCategory.js";

class SubCategoryController {
    async insertData(body) {
        try {
            const existingData = await SubCategory.findOne({ SubCategory: body.SubCategory })
            if (existingData) {
                return {
                    Message: "SubCategory is already Exists",
                    Code: 409
                }
            }
            const newData = new SubCategory(body)
            const savedData = await newData.save()
            return {
                Message: "Data inserted successfully",
                Data: savedData,
                Code: 200
            };
        } catch (error) {
            return ({
                Message: "Something went Wrong",
                Error: error,
                Code: 500
            })
        }
    }

    async getData() {
        try {
            var data = await SubCategory.find().populate("CategoryId");

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
            var idData = await SubCategory.findById(id);
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
            const idData = await SubCategory.findByIdAndDelete(id);
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
            const updateData = await SubCategory.findByIdAndUpdate(id, body);
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

export default SubCategoryController