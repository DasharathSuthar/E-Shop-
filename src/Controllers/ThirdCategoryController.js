import axios from "axios"

class ThirdCategoryController {
    URL = "http://localhost:8080/thirdCategory/";

    async postData(Data) {
        try {
            const response = await axios.post(this.URL, Data);
            return response.data;
        } catch (error) {
            // Extract proper error response from Axios error
            return error.response?.data || {
                Message: "Something went wrong",
                Code: 500
            };
        }
    }

    async getData() {
        return await axios.get(this.URL)
            .then(response => (response.data.Data))
            .catch(error => (error))
    }

    async getDataById(id) {
        return await axios.get(`${this.URL}${id}`)
            .then(response => response.data.Data)
            .catch(error => (error))
    }

    async updateData(id, Data) {
        return await axios.put(`${this.URL}${id}`, Data)
            .then(response => response.data)
            .catch(error => (error))
    }

    async deleteData(id) {
        return await axios.delete(`${this.URL}${id}`)
            .then(response => response.data.Message)
            .catch(error => (error))
    }

}

export default ThirdCategoryController