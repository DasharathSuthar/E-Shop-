import SpecificationOption from "../models/SpecificationOption.js";

class SpecificationOptionController {
    async insertData(body) {
        try {
            const newData = new SpecificationOption(body)
            const savedData = await newData.save().then(response => ({
                Message: "Data inserted Successfully",
                Data: response,
                Code: 200
            })).catch(err => ({
                Message: "Something went Wrong",
                Error: err,
                Code: 500
            }))
            return savedData;
        } catch (error) {
            return ({
                Message: "Something went Wrong",
                Error: err,
                Code: 500
            })
        }
    }

    async getData() {
        try {
            var data = await SpecificationOption.find({});
            return ({
                Message: "Data Geted",
                Data: data,
                Code: 200
            })
        } catch (error) {
            return ({
                Message: "Something went Wrong",
                Error: err,
                Code: 500
            })
        }
    }
    async getDataById(id) {
        try {
            var idData = await SpecificationOption.findById(id);
            return ({
                Message: "Data Geted By Id",
                Data: idData,
                Code: 200
            })
        } catch (error) {
            return ({
                Message: "Something went Wrong",
                Error: err,
                Code: 500
            })
        }
    }

    deleteData = async (id) => {
        try {
            const idData = await SpecificationOption.findByIdAndDelete(id);
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
            const updateData = await SpecificationOption.findByIdAndUpdate(id, body);
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

export default SpecificationOptionController