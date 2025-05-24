import axios from "axios"

class SubCategoryController {
    URL = "http://localhost:8080/subCategory/";

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
        .catch(error => console.log(error))
    }

    async getDataById(id) {
        return await axios.get(`${this.URL}${id}`)
        .then(response => response.data.Data)
        .catch(error => console.log(error))
    }

    async updateData(id,Data) {
        return await axios.put(`${this.URL}${id}`,Data)
        .then(res => res.data)
        .catch(error => console.log(error))
    }

    async deleteData(id){
        return await axios.delete(`${this.URL}${id}`)
        .then(response => response.data.Message)
        .catch(error => console.log(error))
    }

}

export default SubCategoryController