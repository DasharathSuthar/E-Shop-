import City from "../models/City.js";

class CityController {
    async insertData(body) {
        try {

            const existingData = await City.findOne({ City: body.City })
            if (existingData) {
                return {
                    Message: "City is already Exists",
                    Code: 409
                }
            }
            const newData = new City(body)
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
            var data = await City.find().populate("CountryId").populate("StateId");
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
            var idData = await City.findById(id);
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
            const idData = await City.findByIdAndDelete(id);
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
            const updateData = await City.findByIdAndUpdate(id, body);
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

export default CityController