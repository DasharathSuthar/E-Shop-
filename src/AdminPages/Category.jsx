import React, { useRef, useEffect, useState } from 'react'
import CategoryController from '../Controllers/CategoryController';

const Category = () => {
    var CategoryInt = new CategoryController();
    var category = useRef()
   
    const [categoryList, setCategoryList] = useState();
    const [editId,setEditId] = useState('')

    const GetData = async () => {
        var Data = await CategoryInt.getData()
        setCategoryList(Data)
    }

    const PostData = async () => {
        var Obj = {
            Category: category.current.value
        };
        await CategoryInt.postData(Obj)
            .then((res) => {
                alert(res.Message)
                category.current.value = "";
                GetData();
            })
            .catch(error => console.log(error));
    };
    const EditData = async (id) => {
    
        await CategoryInt.getDataById(id).then(res => {
            category.current.value = res.Category
            setEditId(id)
            document.querySelector("#AddBtn").classList.add("hidden")
            document.querySelector("#UpdateBtn").classList.remove("hidden")
        })

    }
    const UpdateData = async () => {
        var Obj = {
            Category: category.current.value
        }
        await CategoryInt.updateData(editId, Obj).then(res => {
            alert(res.Message)
            category.current.value = "";
            document.querySelector("#AddBtn").classList.remove("hidden")
            document.querySelector("#UpdateBtn").classList.add("hidden")
            GetData()
        })
    }
    const DeleteData = async (id) => {
        await CategoryInt.deleteData(id).then(res => (alert(res)))
        GetData()
    }

    useEffect(() => {
        GetData()
    }, [])

    return (
        <>
            <div className='pb-6 text-xl uppercase text-black'>
                <h1>Category</h1>
            </div>
            <div className='p-4 flex justify-between items-center'>
                <div>
                    <label htmlFor="Category" className='mr-4 uppercase '>Category Name </label>
                    <input type="text" ref={category} className='border-black border rounded-md p-1' />
                </div>
                <div>
                    <button id='AddBtn' className='py-2 px-5 bg-blue-500 rounded-md text-white uppercase hover:bg-blue-700 duration-300' onClick={PostData}>Add Category</button>
                    <button id='UpdateBtn' className='py-2 px-5 ml-2 hidden bg-green-500 rounded-md text-white uppercase hover:bg-green-700 duration-300' onClick={UpdateData}>Update</button>
                </div>
            </div>
            <div className="grid grid-cols-1">
                <table className='text-center'>
                    <thead>
                        <tr>
                            <th className='border border-black'>ID</th>
                            <th className='border border-black'>Category</th>
                            <th className='border border-black'>Status</th>
                            <th className='border border-black'>Edit</th>
                            <th className='border border-black'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(categoryList || []).map((item, index) => {
                            return (<tr key={item._id} >
                                <td className='border border-black p-2'>{index + 1}</td>
                                <td className='border border-black p-2'>{item.Category}</td>
                                <td className='border border-black p-2'>{item.Status}</td>
                                <td className='border border-black p-2'>
                                    <button className='px-5 py-2 rounded-lg bg-blue-700 text-white text-center' onClick={() => EditData(item._id)}>Edit</button>
                                </td>
                                <td className='border border-black p-2'>
                                    <button className='px-5 py-2 rounded-lg bg-red-700 text-white text-center' onClick={() => DeleteData(item._id)}>Delete</button>
                                </td>
                               
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Category