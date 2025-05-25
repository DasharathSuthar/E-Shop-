
import State from "../models/State.js";

class StateController {
    async insertData(body) {
        try {
            const existingData = await State.findOne({ State: body.State })
            if (existingData) {
                return {
                    Message: "State is already Exists",
                    Code: 409
                }
            }
            const newData = new State(body)
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
            var data = await State.find().populate("CountryId");

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
            var idData = await State.findById(id);
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
            const idData = await State.findByIdAndDelete(id);
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
            const updateData = await State.findByIdAndUpdate(id, body);
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

export default StateController