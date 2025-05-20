import Category from "../models/Category.js";

export const insertData = async (body) => {
    try {
        const categoryData = new Category(body)

        const SavedData = await categoryData.save().then(response => {
            const Data = {
                Message: "Data inserted Successfully",
                Data: response,
                Code: 200
            }
            return Data
        }).catch(err => ({
            Message: "Something Wrong",
            Error: err,
            Code: 500
        }))

        return SavedData
    } catch (error) {
        console.log(error);
        return ({
            Message: "Something Wrong",
            Error: error,
            Code: 500
        })
    }
}

export const getData = async () => {
    try {
        const getData = await Category.find();
        return ({
            Data: getData,
            Message: "Succsess",
            Code: 200
        })
    } catch (error) {
        console.log(error);
        return ({
            Error: error,
            Message: "Error",
            Code: 500
        })
    }
}

export const getDataById = async (id) => {
    try {
        const idData = await Category.findById(id)
        return ({
            Message: "Data Geted By ID",
            Data: idData,
            Code: 200
        })
    } catch (error) {
        console.log(error);
        return ({
            Error: error,
            Message: "Error",
            Code: 500
        })
    }
}

export const deleteData = async (id) => {
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

export const updateData = async (id, body) => {
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