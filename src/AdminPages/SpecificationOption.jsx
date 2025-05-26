import React, { useEffect, useState } from 'react'
import SpecificationController from '../Controllers/SpecificationController';
import SpecificationOptionController from '../Controllers/SpecificationOptionController'

const SpecificationOption = () => {
    var SpecificationInt = new SpecificationController()
    var SpecificationOptionInt = new SpecificationOptionController()

    // const SpecificationOptionList = [
    //     { SpecificationName: "Warranty",Value:"2Year", Status: "Active" },
    //     { SpecificationName: "Color",Value:"Red", Status: "Active" },
    //     { SpecificationName: "Meter",Value:"90", Status: "Active" },
    //     { SpecificationName: "Diameter",Value:"1sq", Status: "Active" },
    //     { SpecificationName: "Feet",Value:"75", Status: "Active" },
    //     { SpecificationName: "Amp",Value:"20A", Status: "Active" },
    //     { SpecificationName: "Type",Value:"1Way", Status: "Active" },
    // ];
    const [specificationList, setSpecificationList] = useState([]);
    const [specificationOptionList, setSpecificationOptionList] = useState([]);
    const [editId, setEditId] = useState('')
    const [formData, setFormData] = useState({
        SpecificationId: "",
        Value: ""
    })

    const getSpecificationData = async () => {
        var specificationData = await SpecificationInt.getData()
        setSpecificationList(specificationData)
    }

    const getSpecificationOptionData = async () => {
        var specificationOptionData = await SpecificationOptionInt.getData()
        setSpecificationOptionList(specificationOptionData)
    }

    const insertData = async () => {
        await SpecificationOptionInt.postData(formData).then(res => {
            alert(res.Message)
            setFormData({
                SpecificationId: "",
                Value: ""
            })
            getSpecificationOptionData()
        })
    }

    const editData = async (id) => {
        await SpecificationOptionInt.getDataById(id).then(res => {
            setEditId(id)
            setFormData({
                SpecificationId: res.SpecificationId,
                Value: res.Value
            })
            document.querySelector('#AddBtn').classList.add('hidden')
            document.querySelector('#UpdateBtn').classList.remove('hidden')
        })
    }

    const updateData = async () => {
        await SpecificationOptionInt.updateData(editId, formData).then(res => {
            alert(res.Message)
            setFormData({
                SpecificationId: "",
                Value: ""
            })
            document.querySelector('#AddBtn').classList.remove('hidden')
            document.querySelector('#UpdateBtn').classList.add('hidden')
            getSpecificationOptionData()
        })
    }

    const deleteData = async (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this Data?');
        if (!confirmed) return;

        await SpecificationOptionInt.deleteData(id).then(res => {
            alert(res.Message)
            getSpecificationOptionData()
        })
    }

    useEffect(() => {
        getSpecificationData()
        getSpecificationOptionData()
    }, [])
    return (
        <>
            <div className='pb-6 text-xl uppercase text-black'>
                <h1>Specification Option List</h1>
            </div>
            <div className='p-4 flex justify-between items-center'>
                <div>
                    <label htmlFor="SpecificationValue" className='mr-4 uppercase'>Specification Value</label>
                    <input type="text" placeholder='Specification Value' value={formData.Value} onChange={(e) => setFormData({ ...formData, Value: e.target.value })} className='border-black border rounded-md p-1 mr-4' />

                    <select
                        value={formData.SpecificationId}
                        onChange={e => setFormData({ ...formData, SpecificationId: e.target.value })}
                        className='border-black border rounded-md p-1 mr-4 text-black'
                    >
                        <option value="">Select Specification Name</option>
                        {specificationList.map((speci) => (
                            <option key={speci._id} value={speci._id}>{speci.SpecificationName}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <button
                        id='AddBtn'
                        className='py-2 px-5 bg-blue-500 rounded-md text-white uppercase hover:bg-blue-700 duration-300'
                        onClick={insertData}
                    >
                        Add Sub-Category
                    </button>
                    <button id='UpdateBtn' className='py-2 px-5 ml-2 hidden bg-green-500 rounded-md text-white uppercase hover:bg-green-700 duration-300' onClick={updateData}>Update</button>
                </div>
            </div>
            <div className="grid grid-cols-1">
                <table className='text-center'>
                    <thead>
                        <tr>
                            <th className='border border-black'>ID</th>
                            <th className='border border-black'>Specification ID</th>
                            <th className='border border-black'>Value</th>
                            <th className='border border-black'>Status</th>
                            <th className='border border-black'>Edit</th>
                            <th className='border border-black'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(specificationOptionList || []).map((item, index) => {
                            return (<tr key={item._id} >
                                <td className='border border-black p-2'>{index + 1}</td>
                                <td className='border border-black p-2'>{item.SpecificationId?.SpecificationName}</td>
                                <td className='border border-black p-2'>{item.Value}</td>
                                <td className='border border-black p-2'>{item.Status}</td>
                                <td className='border border-black p-2'>
                                    <button className='px-5 py-2 rounded-lg bg-blue-700 text-white text-center'
                                    onClick={()=>editData(item._id)}>Edit</button>
                                </td>
                                <td className='border border-black p-2'>
                                    <button className='px-5 py-2 rounded-lg bg-red-700 text-white text-center'
                                    onClick={()=>deleteData(item._id)}>Delete</button>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default SpecificationOption