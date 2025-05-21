import axios from "axios"

class CategoryController {
    URL = "http://localhost:8080/Category/";

   async postData(Category) {
        return await axios.post(this.URL, Category)
        .then(response => (response.data))
        .catch(error  => error)
    }

    async getData() {
        return await axios.get(this.URL)
        .then(response => (response.data.Data))
        .catch(error => console.log(error))
    }

    

    async deleteData(id){
        return await axios.delete(`${this.URL}${id}`)
        .then(response => response.data.Message)
        .catch(error => console.log(error))
    }

}

export default CategoryController