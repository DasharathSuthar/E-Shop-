import React, { useEffect, useState } from 'react'
import BrandController from '../Controllers/BrandController';


const Brand = () => {

    var BrandInt = new BrandController()
    
    const [brandList, setBrandList] = useState();
    const [formData, setFormData] = useState({
        Brand: ""
    })
    const [editId, setEditId] = useState('')

    const getBrandList = async () => {
        const brandData = await BrandInt.getData()
        setBrandList(brandData)
    }

    const insertData = async () => {
        await BrandInt.postData(formData).then(res => {
            alert(res.Message)
            setFormData({
                Brand: ""
            })
            getBrandList()
        })
    }

    const EditData = async (id) => {

        await BrandInt.getDataById(id).then(res => {
            setFormData({
                Brand: res.Brand
            })
            setEditId(id)
            document.querySelector("#AddBtn").classList.add("hidden")
            document.querySelector("#UpdateBtn").classList.remove("hidden")
        })

    }
    const updateData = async () => {

        await BrandInt.updateData(editId, formData).then(res => {
            alert(res.Message)
            setFormData({
                Brand: ""
            })
            document.querySelector("#AddBtn").classList.remove("hidden")
            document.querySelector("#UpdateBtn").classList.add("hidden")
            getBrandList()
        })
    }
    const DeleteData = async (id) => {
        await BrandInt.deleteData(id).then(res => (alert(res)))
        getBrandList()
    }
    useEffect(() => {
        getBrandList()
    }, [])
    return (
        <>
            <div className='pb-6 text-xl uppercase text-black'>
                <h1>Brand</h1>
            </div>
            <div className='p-4 flex justify-between items-center'>
                <div>
                    <label htmlFor="Category" className='mr-4 uppercase '>Brand Name </label>
                    <input type="text" value={formData.Brand} onChange={(e) => setFormData({ Brand: e.target.value })} className='border-black border rounded-md p-1' />
                </div>
                <div>
                    <button id='AddBtn' className='py-2 px-5 bg-blue-500 rounded-md text-white uppercase hover:bg-blue-700 duration-300' onClick={insertData}>Add Brand</button>
                    <button id='UpdateBtn' className='py-2 px-5 ml-2 hidden bg-green-500 rounded-md text-white uppercase hover:bg-green-700 duration-300' onClick={updateData}>Update</button>
                </div>
            </div>
            <div className="grid grid-cols-1">
                <table className='text-center'>
                    <thead>
                        <tr>
                            <th className='border border-black'>ID</th>
                            <th className='border border-black'>Brand</th>
                            <th className='border border-black'>Status</th>
                            <th className='border border-black'>Edit</th>
                            <th className='border border-black'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(brandList || []).map((item, index) =>
                        (<tr key={item._id} >
                            <td className='border border-black p-2'>{index + 1}</td>
                            <td className='border border-black p-2'>{item.Brand}</td>
                            <td className='border border-black p-2'>{item.Status}</td>
                            <td className='border border-black p-2'>
                                <button className='px-5 py-2 rounded-lg bg-blue-700 text-white text-center' onClick={() => EditData(item._id)}>Edit</button>
                            </td>
                            <td className='border border-black p-2'>
                                <button className='px-5 py-2 rounded-lg bg-red-700 text-white text-center' onClick={() => DeleteData(item._id)}>Delete</button>
                            </td>
                        </tr>)
                        )}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Brand