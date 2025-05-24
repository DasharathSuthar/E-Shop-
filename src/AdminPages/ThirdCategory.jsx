import React, { useEffect,  useState } from 'react'
import CategoryController from '../Controllers/CategoryController';
import SubCategoryController from '../Controllers/SubCategoryController';
import ThirdCategoryController from '../Controllers/ThirdCategoryController';


const ThirdCategory = () => {
    
    const CategoryInt = new CategoryController();
    const SubCategoryInt = new SubCategoryController();
    const ThirdCategoryInt = new ThirdCategoryController();

    const [categoryList, setCategoryList] = useState([])
    const [subCategoryList, setSubCategoryList] = useState([])
    const [thirdCategory, setThirdCategory] = useState('')
    const [formData, setFormData] = useState({
        CategoryId: "",
        SubCategoryId: "",
        ThirdCategory: ""
    })
    const [editId,setEditId] = useState('')

    const getCategoryData = async () => {
        const CategoryData = await CategoryInt.getData()
        setCategoryList(CategoryData)
    }

    const getSubCategoryData = async () => {
        const subCategoryData = await SubCategoryInt.getData()
        setSubCategoryList(subCategoryData)
    }

    const getThirdCategoryData = async () => {
        const thirdCategoryData = await ThirdCategoryInt.getData()
        setThirdCategory(thirdCategoryData)
    }

    const insertSubCategoryData = async () => {
        await ThirdCategoryInt.postData(formData).then(res => {
            alert(res.Message)
            setFormData({
                CategoryId: "",
                SubCategoryId: "",
                ThirdCategory: ""
            })
            getThirdCategoryData()
        }).catch(error => console.log(error));
    }

    const editData = async (id) => {

        await ThirdCategoryInt.getDataById(id).then(res => {
            setFormData({
                CategoryId: res.CategoryId,
                SubCategoryId: res.SubCategoryId,
                ThirdCategory: res.ThirdCategory
            })
            setEditId(id)
            document.querySelector("#AddBtn").classList.add("hidden")
            document.querySelector("#UpdateBtn").classList.remove("hidden")

        })
    }

    const UpdateData = async () => {
        
        await ThirdCategoryInt.updateData(editId, formData).then(res => {
            alert(res.Message)
            setFormData({
                CategoryId: "",
                SubCategoryId: "",
                ThirdCategory: ""
            })
            document.querySelector("#AddBtn").classList.remove("hidden")
            document.querySelector("#UpdateBtn").classList.add("hidden")
            getThirdCategoryData()
        }).catch(error => {
            console.log(error);
        })
    }
    const deleteData = async (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this third-category?');
        if (!confirmed) return;

        await ThirdCategoryInt.deleteData(id).then(response => {
            alert(response)
            getThirdCategoryData()
        }).catch(error => console.log(error))
    }


    useEffect(() => {
        getCategoryData()
        getSubCategoryData()
        getThirdCategoryData()
    }, [])
    return (
        <>
            <div className='pb-6 text-xl uppercase text-black'>
                <h1>Third-Category</h1>
            </div>
            <div className='p-1 mb-2 flex justify-between items-center'>
                <div className='flex flex-wrap gap-1 items-center '>
                    <label htmlFor="thirdCategory" className='mr-4 uppercase'>Third-Category</label>
                    <input type="text" value={formData.ThirdCategory} onChange={(e) => setFormData({ ...formData, ThirdCategory: e.target.value })} className='border-black border rounded-md p-1 mr-4' />

                    <select
                        value={formData.CategoryId}
                        onChange={e => setFormData({ ...formData, CategoryId: e.target.value })}
                        className='border-black border rounded-md p-1 mr-4 text-black'
                    >
                        <option value="">Select Category</option>
                        {categoryList.map((cat) => (
                            <option key={cat._id} value={cat._id}>{cat.Category}</option>
                        ))}
                    </select>
                    <select
                        value={formData.SubCategoryId}
                        onChange={e => setFormData({ ...formData, SubCategoryId: e.target.value })}
                        className='border-black border w-[200px] rounded-md p-1 mr-4 text-black'
                    >
                        <option value="">Select SubCategory</option>
                        {subCategoryList
                            .filter(sub => sub.CategoryId._id === formData.CategoryId)
                            .map((cat) => (
                                <option key={cat._id} value={cat._id}>{cat.SubCategory}</option>
                            ))}
                    </select>
                </div>

                <div>
                    <button
                        id='AddBtn'
                        className='py-2 px-5 bg-blue-500 rounded-md text-white uppercase hover:bg-blue-700 duration-300'
                        onClick={insertSubCategoryData}
                    >
                        Add Third-Category
                    </button>
                    <button id='UpdateBtn' className='py-2 px-5 ml-2 hidden bg-green-500 rounded-md text-white uppercase hover:bg-green-700 duration-300' onClick={UpdateData}>Update</button>
                </div>
            </div>

            <div className="grid grid-cols-1">
                <table className='text-center'>
                    <thead>
                        <tr>
                            <th className='border border-black'>ID</th>
                            <th className='border border-black'>Category Id</th>
                            <th className='border border-black'>Sub Category Id</th>
                            <th className='border border-black'>Third Category </th>
                            <th className='border border-black'>Status</th>
                            <th className='border border-black'>Edit</th>
                            <th className='border border-black'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(thirdCategory || []).map((item, index) => {
                            return (<tr key={item._id} >
                                <td className='border border-black p-2'>{index + 1}</td>
                                <td className='border border-black p-2'>{item.CategoryId?.Category}</td>
                                <td className='border border-black p-2'>{item.SubCategoryId?.SubCategory}</td>
                                <td className='border border-black p-2'>{item.ThirdCategory}</td>
                                <td className='border border-black p-2'>{item.Status}</td>
                                <td className='border border-black p-2'>
                                    <button className='px-5 py-2 rounded-lg bg-blue-700 text-white text-center' onClick={() => editData(item._id)}>Edit</button>
                                </td>
                                <td className='border border-black p-2'>
                                    <button className='px-5 py-2 rounded-lg bg-red-700 text-white text-center' onClick={() => { deleteData(item._id) }}>Delete</button>
                                </td>
                               
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default ThirdCategory