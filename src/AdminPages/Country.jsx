import React, { useEffect, useState } from 'react'

const Country = () => {
    const CountryList = [
        { Country: "United States", Status: "Active" },
        { Country: "India   ", Status: "Active" },
        { Country: "Brazil", Status: "Active" },
        { Country: "Australia", Status: "Active" },
        { Country: "Canada", Status: "Active" },
    ];
    const [countryList, setCountryList] = useState();
    useEffect(() => {
        setCountryList(CountryList);
    }, [])
    return (
        <>
            <div className='pb-6 text-xl uppercase text-black'>
                <h1>Country List</h1>
            </div>
            <div className="grid grid-cols-1">
                <table className='text-center'>
                    <thead>
                        <tr>
                            <th className='border border-black'>ID</th>
                            <th className='border border-black'>Country</th>
                            <th className='border border-black'>Status</th>
                            <th className='border border-black'>Edit</th>
                            <th className='border border-black'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(countryList || []).map((item, index) => {
                            return (<tr key={index} >
                                <td className='border border-black p-2'>{index + 1}</td>
                                <td className='border border-black p-2'>{item.Country}</td>
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

export default Country