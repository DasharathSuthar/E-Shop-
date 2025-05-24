import React, { useEffect, useRef, useState } from 'react';
import CategoryController from '../Controllers/CategoryController';
import SubCategoryController from '../Controllers/SubCategoryController';

const SubCategory = () => {
    const CategoryInt = new CategoryController();
    const SubCategoryInt = new SubCategoryController();


    const [categoryList, setCategoryList] = useState([]);
    const [subCategoryList, setSubCategoryList] = useState([]);
    const [formData, setFormData] = useState({
        CategoryId: "",
        SubCategory: ""
    });

    const getCategoryData = async () => {
        const categoryData = await CategoryInt.getData();
        setCategoryList(categoryData);
    };

    const getSubCategoryData = async () => {
        const subCategoryData = await SubCategoryInt.getData();
        setSubCategoryList(subCategoryData);
    };

    const insertSubCategoryData = async () => {

        await SubCategoryInt.postData(formData)
            .then((res) => {
                alert(res.Message);
                setFormData({
                    CategoryId: "",
                    SubCategory: ""
                })
                getSubCategoryData();
            })
            .catch(error => console.log(error));
    };


    const deleteSubCategory = async (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this sub-category?');
        if (!confirmed) return;

        await SubCategoryInt.deleteData(id)
            .then(msg => {
                alert(msg);
                getSubCategoryData();
            })
            .catch(err => console.error(err));
    };

    useEffect(() => {
        getCategoryData();
        getSubCategoryData();
    }, []);

    return (
        <>
            <div className='pb-6 text-xl uppercase text-black'>
                <h1>Sub-Category</h1>
            </div>

            <div className='p-4 flex justify-between items-center'>
                <div>
                    <label htmlFor="subCategory" className='mr-4 uppercase'>Sub-Category Name</label>
                    <input type="text" onChange={(e) => setFormData({ ...formData, SubCategory: e.target.value })} className='border-black border rounded-md p-1 mr-4' />

                    <select
                        
                        onChange={e => setFormData({ ...formData, CategoryId: e.target.value })}
                        className='border-black border rounded-md p-1 mr-4 text-black'
                    >
                        <option value="">Select Category</option>
                        {categoryList.map((cat) => (
                            <option key={cat._id} value={cat._id}>{cat.Category}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <button
                        id='AddBtn'
                        className='py-2 px-5 bg-blue-500 rounded-md text-white uppercase hover:bg-blue-700 duration-300'
                        onClick={insertSubCategoryData}
                    >
                        Add Sub-Category
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 mt-4">
                <table className='text-center w-full border-collapse'>
                    <thead>
                        <tr>
                            <th className='border border-black'>ID</th>
                            <th className='border border-black'> Category</th>
                            <th className='border border-black'>Sub Category</th>
                            <th className='border border-black'>Status</th>
                            <th className='border border-black'>Edit</th>
                            <th className='border border-black'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(subCategoryList || []).map((item, index) => (
                            <tr key={item._id}>
                                <td className='border border-black p-2'>{index + 1}</td>
                                <td className='border border-black p-2'>{item.CategoryId?.Category}</td>
                                <td className='border border-black p-2'>{item.SubCategory}</td>
                                <td className='border border-black p-2'>{item.Status}</td>
                                <td className='border border-black p-2'>
                                    <button className='px-5 py-2 rounded-lg bg-blue-700 text-white'>Edit</button>
                                </td>
                                <td className='border border-black p-2'>
                                    <button
                                        className='px-5 py-2 rounded-lg bg-red-700 text-white'
                                        onClick={() => deleteSubCategory(item._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default SubCategory;
