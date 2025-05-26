import Area from "../models/Area.js"

class AreaController {
    async insertData(body) {
        try {
            const existingData = await Area.findOne({ Area: body.Area })
            if (existingData) {
                return {
                    Message: "Area is Already Exists",
                    Code: 409
                }
            }

            const newData = new Area(body)
            const savedData = await newData.save()

            return ({
                Message: "Data inserted Successfully",
                Data: savedData,
                Code: 200
            })

        } catch (error) {
            return {
                Message: "Something is Wrong",
                Error: error,
                Code: 500
            }
        }
    }

    async getData() {
        try {
            const data = await Area.find({}).populate("StateId").populate("CityId")
            return {
                Message: "Data Gated",
                Data: data,
                Code: 200
            }
        } catch (error) {
            return {
                Message: "Something is Wrong",
                Error: error,
                Code: 500
            }
        }
    }

    async getDataById(id) {
        try {
            const idData = await Area.findById(id)
            return {
                Message: "Gated Data by Id",
                Data: idData,
                Code: 200
            }
        } catch (error) {
            return {
                Message: "Something is Wrong",
                Error: error,
                Code: 500
            }
        }
    }

    async updateData(id, body) {
        try {
            const updateData = await Area.findByIdAndUpdate(id, body)
            return {
                Message: "Data Updated Successfully",
                Data: updateData,
                Code: 200
            }
        } catch (error) {
            return {
                Message: "Something is Wrong",
                Error: error,
                Code: 500
            }
        }
    }

    async deleteData(id) {
        try {
            const deleteData = await Area.findByIdAndDelete(id)
            return {
                Message: "Data Deleted",
                Data: deleteData,
                Code: 200
            }
        } catch (error) {
            return {
                Message: "Something is Wrong",
                Error: error,
                Code: 500
            }
        }
    }
}

export default AreaController