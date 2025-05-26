import React, { useEffect, useState } from 'react'
import CountryController from '../Controllers/CountryController'
import StateController from '../Controllers/StateController'
import CityController from '../Controllers/CityController'

const City = () => {

    const CountryInt = new CountryController();
    const StateInt = new StateController();
    const CityInt = new CityController();

    const [countryList, setCountryList] = useState([])
    const [stateList, setStateList] = useState([])
    const [cityList, setCityList] = useState([])
    const [formData, setFormData] = useState({
        CountryId: "",
        StateId: "",
        City: ""
    })
    const [editId, setEditId] = useState('')

    const getCountryData = async () => {
        var CountryData = await CountryInt.getData()
        setCountryList(CountryData)
    }

    const getStateData = async () => {
        var StateData = await StateInt.getData()
        setStateList(StateData)
    }

    const getCityData = async () => {
        var CityData = await CityInt.getData()
        setCityList(CityData)
    }

    const insertCityData = async () => {
        await CityInt.postData(formData).then(res => {
            alert(res.Message)
            setFormData({
                CountryId: "",
                StateId: "",
                City: ""
            })
            getCityData()
        }).catch(error => console.log(error));
    }

    const editData = async (id) => {

        await CityInt.getDataById(id).then(res => {
            setFormData({
                CountryId: res.CountryId,
                StateId: res.StateId,
                City: res.City
            })
            setEditId(id)
            document.querySelector("#AddBtn").classList.add("hidden")
            document.querySelector("#UpdateBtn").classList.remove("hidden")

        })
    }

    const UpdateData = async () => {

        await CityInt.updateData(editId, formData).then(res => {
            alert(res.Message)
            setFormData({
                CountryId: "",
                StateId: "",
                City: ""
            })
            document.querySelector("#AddBtn").classList.remove("hidden")
            document.querySelector("#UpdateBtn").classList.add("hidden")
            getCityData()
        }).catch(error => {
            console.log(error);
        })
    }
    const deleteData = async (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this third-category?');
        if (!confirmed) return;

        await CityInt.deleteData(id).then(response => {
            alert(response)
            getCityData()
        }).catch(error => console.log(error))
    }


    useEffect(() => {
        getCountryData()
        getStateData()
        getCityData()
    }, [])
    return (
        <>
            <div className='pb-6 text-xl uppercase text-black'>
                <h1>City List</h1>
            </div>
            <div className='p-1 mb-2 flex justify-between items-center'>
                <div className='flex flex-wrap gap-1 items-center '>
                    <label htmlFor="City" className='mr-4 uppercase'>City Name</label>
                    <input type="text" value={formData.City} onChange={(e) => setFormData({ ...formData, City: e.target.value })} className='border-black border rounded-md p-1 mr-4' />

                    <select
                        value={formData.CountryId}
                        onChange={e => setFormData({ ...formData, CountryId: e.target.value })}
                        className='border-black border rounded-md p-1 mr-4 text-black'
                    >
                        <option value="">Select Country</option>
                        {countryList.map((cat) => (
                            <option key={cat._id} value={cat._id}>{cat.Country}</option>
                        ))}
                    </select>
                    <select
                        value={formData.StateId}
                        onChange={e => setFormData({ ...formData, StateId: e.target.value })}
                        className='border-black border w-[200px] rounded-md p-1 mr-4 text-black'
                    >
                        <option value="">Select State</option>
                        {stateList
                            .filter(state => state.CountryId._id === formData.CountryId)
                            .map((state) => (
                                <option key={state._id} value={state._id}>{state.State}</option>
                            ))}
                    </select>
                </div>

                <div>
                    <button
                        id='AddBtn'
                        className='py-2 px-5 bg-blue-500 rounded-md text-white uppercase hover:bg-blue-700 duration-300'
                        onClick={insertCityData}
                    >
                        Add City
                    </button>
                    <button id='UpdateBtn' className='py-2 px-5 ml-2 hidden bg-green-500 rounded-md text-white uppercase hover:bg-green-700 duration-300' onClick={UpdateData}>Update</button>
                </div>
            </div>
            <div className="grid grid-cols-1">
                <table className='text-center'>
                    <thead>
                        <tr>
                            <th className='border border-black'>ID</th>
                            <th className='border border-black'>Country </th>
                            <th className='border border-black'>State </th>
                            <th className='border border-black'>City</th>
                            <th className='border border-black'>Status</th>
                            <th className='border border-black'>Edit</th>
                            <th className='border border-black'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(cityList || []).map((item, index) => {
                            return (<tr key={item._id} >
                                <td className='border border-black p-2'>{index + 1}</td>
                                <td className='border border-black p-2'>{item.CountryId?.Country}</td>
                                <td className='border border-black p-2'>{item.StateId?.State}</td>
                                <td className='border border-black p-2'>{item.City}</td>
                                <td className='border border-black p-2'>{item.Status}</td>
                                <td className='border border-black p-2'>
                                    <button className='px-5 py-2 rounded-lg bg-blue-700 text-white text-center' onClick={() => editData(item._id)}>Edit</button>
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

export default City