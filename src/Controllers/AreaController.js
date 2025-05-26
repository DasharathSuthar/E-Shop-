import axios from "axios"

class AreaController {
    URL = "http://localhost:8080/area/"

    async insertData(Data){
        try {
            const response = await axios.post(this.URL,Data)
            return response.data
        } catch (error) {
            return error.response?.data || {
                Message : "Something Is Wrong",
                Code : 500
            }
        }
    }

    async getData(){
        try {
            const response = await axios.get(this.URL)
            return response.data.Data
        } catch (error) {
            return error
        }
    }

    async getDataById(id){
        try {
            const response = await axios.get(`${this.URL}${id}`)
            return response.data.Data
        } catch (error) {
            return error
        }
    }

    async updateData(id,Data){
        try {
            const response = await axios.put(`${this.URL}${id}`,Data)
            return response.data
        } catch (error) {
            return error
        }
    }

    async deleteData(id){
        try {
            const response = await axios.delete(`${this.URL}${id}`)
            return response.data
        } catch (error) {
            return error
        }
    }
}

export default AreaController