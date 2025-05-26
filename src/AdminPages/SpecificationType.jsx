import React, { useEffect, useState } from 'react'
import SpecificationController from '../Controllers/SpecificationController';
const SpecificationList = () => {
    var SpecificationInt = new SpecificationController()
   
    const [specificationList, setSpecificationList] = useState([]);
    const [editId, setEditId] = useState('')
    const [formData, setFormData] = useState({
        SpecificationName: "",
        SpecificationType: ""
    })

    const getData = async () => {
        var specificationData = await SpecificationInt.getData()
        setSpecificationList(specificationData)
    }

    const insertData = async () => {
        await SpecificationInt.postData(formData).then(res => {
            alert(res.Message)
            setFormData({
                SpecificationName: "",
                SpecificationType: ""
            })
            getData()
        })
    }

    const editData = async (id) => {
        await SpecificationInt.getDataById(id).then(res => {
            setEditId(id)
            setFormData({
                SpecificationName: res.SpecificationName,
                SpecificationType: res.SpecificationType
            })
            document.querySelector('#AddBtn').classList.add('hidden')
            document.querySelector('#UpdateBtn').classList.remove('hidden')
        })
    }

    const updateData = async () => {
        await SpecificationInt.updateData(editId, formData).then(res => {
            alert(res.Message)
            setFormData({
                SpecificationName: "",
                SpecificationType: ""
            })
            document.querySelector('#AddBtn').classList.remove('hidden')
            document.querySelector('#UpdateBtn').classList.add('hidden')
            getData()
        })
    }

    const deleteData = async (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this Data?');
        if (!confirmed) return;

        await SpecificationInt.deleteData(id).then(res => {
            alert(res.Message)
            getData()
        })
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div className='pb-6 text-xl uppercase text-black'>
                <h1>Specification Type List</h1>
            </div>
            <div className='p-4 flex justify-between items-center'>
                <div>
                    <label htmlFor="SpecificationName" className='mr-4 uppercase '>Specification Name </label>
                    <input type="text" value={formData.SpecificationName} className='border-black border rounded-md p-1' onChange={e => setFormData({...formData,SpecificationName:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="SpecificationType" className='mr-4 uppercase '>Specification Type </label>
                    <input type="text" value={formData.SpecificationType} className='border-black border rounded-md p-1' onChange={e => setFormData({...formData,SpecificationType:e.target.value})}/>
                </div>
                <div>
                    <button id='AddBtn' className='py-2 px-5 bg-blue-500 rounded-md text-white uppercase hover:bg-blue-700 duration-300' onClick={insertData}>Add Specification</button>
                    <button id='UpdateBtn' className='py-2 px-5 ml-2 hidden bg-green-500 rounded-md text-white uppercase hover:bg-green-700 duration-300' onClick={updateData}>Update</button>
                </div>
            </div>
            <div className="grid grid-cols-1">
                <table className='text-center'>
                    <thead>
                        <tr>
                            <th className='border border-black'>ID</th>
                            <th className='border border-black'>Specification Name</th>
                            <th className='border border-black'>Specification Type</th>
                            <th className='border border-black'>Status</th>
                            <th className='border border-black'>Edit</th>
                            <th className='border border-black'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(specificationList || []).map((item, index) => {
                            return (<tr key={item._id} >
                                <td className='border border-black p-2'>{index + 1}</td>
                                <td className='border border-black p-2'>{item.SpecificationName}</td>
                                <td className='border border-black p-2'>{item.SpecificationType}</td>
                                <td className='border border-black p-2'>{item.Status}</td>
                                <td className='border border-black p-2'>
                                    <button className='px-5 py-2 rounded-lg bg-blue-700 text-white text-center'
                                        onClick={() => editData(item._id)}>Edit</button>
                                </td>
                                <td className='border border-black p-2'>
                                    <button className='px-5 py-2 rounded-lg bg-red-700 text-white text-center'
                                        onClick={() => deleteData(item._id)}>Delete</button>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default SpecificationList