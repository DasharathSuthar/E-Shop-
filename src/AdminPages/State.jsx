import React, { useEffect, useState } from 'react'
import StateController from '../Controllers/StateController';
import CountryController from '../Controllers/CountryController';

const State = () => {
    var StateInt = new StateController()
    var CountryInt = new CountryController()

    const [countryList, setCountryList] = useState([]);
    const [stateList, setStateList] = useState([]);
    const [formData, setFormData] = useState({
        CountryId: "",
        State: ""
    })
    const [editId, setEditId] = useState('')

    const getCountryData = async () => {
        const countryList = await CountryInt.getData()
        setCountryList(countryList)
    }
    const getStateData = async () => {
        const StateData = await StateInt.getData()
        setStateList(StateData)
    }

    const insertCountryData = async () => {
        await StateInt.postData(formData).then(res => {
            alert(res.Message)
            setFormData({
                CountryId: "",
                State: ""
            })
            getStateData()
        })
    }

    const editCountryData = async (id) => {
        await StateInt.getDataById(id).then(res => {
            setEditId(id)
            setFormData({
                CountryId: res.CountryId,
                State: res.State
            })
            document.querySelector('#AddBtn').classList.add("hidden")
            document.querySelector('#UpdateBtn').classList.remove('hidden')
        })
    }

    const updateCountryData = async () => {
        await StateInt.updateData(editId, formData).then(res => {
            alert(res.Message)
            setFormData({
                CountryId: "",
                State: ""
            })
            document.querySelector('#AddBtn').classList.remove("hidden")
            document.querySelector('#UpdateBtn').classList.add('hidden')
            getStateData()
        })
    }

    const deleteCountryData = async (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this Data?');
        if (!confirmed) return;

        await StateInt.deleteData(id).then(res => {
            alert(res.Message)
            getStateData()
        })
    }
    useEffect(() => {
        getCountryData()
        getStateData()
    }, [])
    return (
        <>
            <div className='pb-6 text-xl uppercase text-black'>
                <h1>State List</h1>
            </div>
            <div className='p-4 flex justify-between items-center'>
                <div>
                    <label htmlFor="State" className='mr-4 uppercase'>State Name</label>
                    <input type="text" value={formData.State} onChange={(e) => setFormData({ ...formData, State: e.target.value })} className='border-black border rounded-md p-1 mr-4' />

                    <select
                        value={formData.CountryId}
                        onChange={e => setFormData({ ...formData, CountryId: e.target.value })}
                        className='border-black border rounded-md p-1 mr-4 text-black'
                    >
                        <option value="">Select Country</option>
                        {countryList.map((country) => (
                            <option key={country._id} value={country._id}>{country.Country}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <button
                        id='AddBtn'
                        className='py-2 px-5 bg-blue-500 rounded-md text-white uppercase hover:bg-blue-700 duration-300'
                        onClick={insertCountryData}
                    >
                        Add State
                    </button>
                    <button id='UpdateBtn' className='py-2 px-5 ml-2 hidden bg-green-500 rounded-md text-white uppercase hover:bg-green-700 duration-300' onClick={updateCountryData}>Update</button>
                </div>
            </div>
            <div className="grid grid-cols-1">
                <table className='text-center'>
                    <thead>
                        <tr>
                            <th className='border border-black'>ID</th>
                            <th className='border border-black'>Country ID</th>
                            <th className='border border-black'>State</th>
                            <th className='border border-black'>Status</th>
                            <th className='border border-black'>Edit</th>
                            <th className='border border-black'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(stateList || []).map((item, index) => {
                            return (<tr key={item._id} >
                                <td className='border border-black p-2'>{index + 1}</td>
                                <td className='border border-black p-2'>{item.CountryId?.Country}</td>
                                <td className='border border-black p-2'>{item.State}</td>
                                <td className='border border-black p-2'>{item.Status}</td>
                                <td className='border border-black p-2'>
                                    <button className='px-5 py-2 rounded-lg bg-blue-700 text-white text-center' onClick={() => editCountryData(item._id)}>Edit</button>
                                </td>
                                <td className='border border-black p-2'>
                                    <button className='px-5 py-2 rounded-lg bg-red-700 text-white text-center' onClick={()=>deleteCountryData(item._id)}>Delete</button>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default State