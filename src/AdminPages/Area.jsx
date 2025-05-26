import React, { useEffect, useState } from 'react'
import StateController from "../Controllers/StateController"
import CityController from "../Controllers/CityController"
import AreaController from '../Controllers/AreaController'
const Area = () => {
    var StateInt = new StateController()
    var CityInt = new CityController()
    var AreaInt = new AreaController()

    const [areaList, setAreaList] = useState([]);
    const [stateList, setStateList] = useState([])
    const [cityList, setCityList] = useState([])
    const [editId, setEditId] = useState('')
    const [formData, setFormData] = useState({
        StateId: "",
        CityId: "",
        Area: ""
    })

    const getStateData = async () => {
        var stateData = await StateInt.getData()
        setStateList(stateData)
    }

    const getCityData = async () => {
        var cityData = await CityInt.getData()
        setCityList(cityData)
    }

    const getAreaData = async () => {
        var areaData = await AreaInt.getData()
        setAreaList(areaData)
    }

    const insertAreaData = async () => {
        await AreaInt.insertData(formData).then(res => {
            alert(res.Message)
            setFormData({
                StateId: "",
                CityId: "",
                Area: ""
            })
            getAreaData()
        })
    }

    const editData = async (id) => {
        await AreaInt.getDataById(id).then(res => {
            setEditId(id)
            setFormData({
                StateId: res.StateId,
                CityId: res.CityId,
                Area: res.Area
            })
            document.querySelector('#AddBtn').classList.add('hidden')
            document.querySelector('#UpdateBtn').classList.remove('hidden')
        })
    }
    const UpdateData = async () => {
        await AreaInt.updateData(editId, formData).then(res => {
            alert(res.Message)
            setFormData({
                StateId: "",
                CityId: "",
                Area: ""
            })
            document.querySelector('#AddBtn').classList.remove('hidden')
            document.querySelector('#UpdateBtn').classList.add('hidden')
            getAreaData()
        })
    }

    const deleteData = async (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this Area-Data?');
        if (!confirmed) return;

        await AreaInt.deleteData(id).then(res => {
            alert(res.Message)
            getAreaData()
        })
    }

    useEffect(() => {
        getAreaData()
        getStateData()
        getCityData()
    }, [])
    return (
        <>
            <div className='pb-6 text-xl uppercase text-black'>
                <h1>Area List</h1>
            </div>
            <div className='p-1 mb-2 flex justify-between items-center'>
                <div className='flex flex-wrap gap-1 items-center '>
                    <label htmlFor="Area" className='mr-4 uppercase'>Area Name</label>
                    <input type="text" value={formData.Area} onChange={(e) => setFormData({ ...formData, Area: e.target.value })} className='border-black border rounded-md p-1 mr-4' />

                    <select
                        value={formData.StateId}
                        onChange={e => setFormData({ ...formData, StateId: e.target.value })}
                        className='border-black border rounded-md p-1 mr-4 text-black'
                    >
                        <option value="">Select State</option>
                        {stateList.map((state) => (
                            <option key={state._id} value={state._id}>{state.State}</option>
                        ))}
                    </select>
                    <select
                        value={formData.CityId}
                        onChange={e => setFormData({ ...formData, CityId: e.target.value })}
                        className='border-black border w-[200px] rounded-md p-1 mr-4 text-black'
                    >
                        <option value="">Select City</option>
                        {cityList
                            .filter(city => city.StateId._id === formData.StateId)
                            .map((city) => (
                                <option key={city._id} value={city._id}>{city.City}</option>
                            ))}
                    </select>
                </div>

                <div>
                    <button
                        id='AddBtn'
                        className='py-2 px-5 bg-blue-500 rounded-md text-white uppercase hover:bg-blue-700 duration-300'
                        onClick={insertAreaData}
                    >
                        Add Area
                    </button>
                    <button id='UpdateBtn' className='py-2 px-5 ml-2 hidden bg-green-500 rounded-md text-white uppercase hover:bg-green-700 duration-300' onClick={UpdateData}>Update</button>
                </div>
            </div>
            <div className="grid grid-cols-1">
                <table className='text-center'>
                    <thead>
                        <tr>
                            <th className='border border-black'>ID</th>
                            <th className='border border-black'>State</th>
                            <th className='border border-black'>City</th>
                            <th className='border border-black'>Area</th>
                            <th className='border border-black'>Status</th>
                            <th className='border border-black'>Edit</th>
                            <th className='border border-black'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(areaList || []).map((item, index) => {
                            return (<tr key={item._id} >
                                <td className='border border-black p-2'>{index + 1}</td>
                                <td className='border border-black p-2'>{item.StateId?.State}</td>
                                <td className='border border-black p-2'>{item.CityId?.City}</td>
                                <td className='border border-black p-2'>{item.Area}</td>
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

export default Area