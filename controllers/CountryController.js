import Country from "../models/Country.js";

class CountryController {
    async insertData(body) {
        try {
           
            const existingData = await Country.findOne({ Country: body.Country }); 
            if (existingData) {
                return {
                    Message: "Country already exists",
                    Code: 409
                };
            }

            const newData = new Country(body);
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
            var data = await Country.find({});
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
            var idData = await Country.findById(id);
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
            const idData = await Country.findByIdAndDelete(id);
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
            const updateData = await Country.findByIdAndUpdate(id, body);
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

export default CountryController