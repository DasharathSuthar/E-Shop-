import React, { useEffect, useState } from 'react'

const City = () => {
    const CityList = [
        { Country: "United States", State: "New York",City:"Buffalo", Status: "Active" },
        { Country: "India   ", State: "Gujarat",City:"Ahmedabad",  Status: "Active" },
        { Country: "Brazil", State: "Minas Gerais	",City:"Uberlândia",    Status: "Active" },
        { Country: "Australia", State: "Queensland",City:"Brisbane",  Status: "Active" },
        { Country: "Canada", State: "Alberta",City:"Calgary",    Status: "Active" },
    ];
    const [cityList, setCityList] = useState();
    useEffect(() => {
        setCityList(CityList);
    }, [])
    return (
        <>
            <div className='pb-6 text-xl uppercase text-black'>
                <h1>City List</h1>
            </div>
            <div className="grid grid-cols-1">
                <table className='text-center'>
                    <thead>
                        <tr>
                            <th className='border border-black'>ID</th>
                            <th className='border border-black'>Country ID</th>
                            <th className='border border-black'>State</th>
                            <th className='border border-black'>City</th>
                            <th className='border border-black'>Status</th>
                            <th className='border border-black'>Edit</th>
                            <th className='border border-black'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(cityList || []).map((item, index) => {
                            return (<tr key={index} >
                                <td className='border border-black p-2'>{index + 1}</td>
                                <td className='border border-black p-2'>{item.Country}</td>
                                <td className='border border-black p-2'>{item.State}</td>
                                <td className='border border-black p-2'>{item.City}</td>
                                <td className='border border-black p-2'>{item.Status}</td>
                                <td className='border border-black p-2'>
                                    <button className='px-5 py-2 rounded-lg bg-blue-700 text-white text-center'>Edit</button>
                                </td>
                                <td className='border border-black p-2'>
                                    <button className='px-5 py-2 rounded-lg bg-red-700 text-white text-center'>Delete</button>
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