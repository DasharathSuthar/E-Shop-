import React, { useEffect, useState } from 'react'

const Area = () => {
    const AreaList = [
        { State: "New York", City: "Buffalo",Area:"Black Roack", Status: "Active" },
        { State: "Gujarat", City: "Ahmedabad",Area:"NarangPura", Status: "Active" },
        { State: "Minas Gerais	", City: "Uberlândia",Area:" Cascalho Rico", Status: "Active" },
        { State: "Queensland", City: "Brisbane",Area:"Fortitude Valley", Status: "Active" },
        { State: "Alberta", City: "Calgary",Area:"Beltline", Status: "Active" },
    ];
    const [areaList, setAreaList] = useState();
    useEffect(() => {   
        setAreaList(AreaList);
    }, [])
    return (
        <>
            <div className='pb-6 text-xl uppercase text-black'>
                <h1>Area List</h1>
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
                            return (<tr key={index} >
                                <td className='border border-black p-2'>{index + 1}</td>
                                <td className='border border-black p-2'>{item.State}</td>
                                <td className='border border-black p-2'>{item.City}</td>
                                <td className='border border-black p-2'>{item.Area}</td>
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

export default Area