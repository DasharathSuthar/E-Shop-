import React, { useEffect, useState } from 'react'

const SpecificationList = () => {
    const SpecificationList = [
        { SpecificationName: "Warranty",SpecificationType:"Text", Status: "Active" },
        { SpecificationName: "Color",SpecificationType:"Option", Status: "Active" },
        { SpecificationName: "Meter",SpecificationType:"Text", Status: "Active" },
        { SpecificationName: "Diameter",SpecificationType:"Text", Status: "Active" },
        { SpecificationName: "Feet",SpecificationType:"Text", Status: "Active" },
        { SpecificationName: "Amp",SpecificationType:"Text", Status: "Active" },
        { SpecificationName: "Type",SpecificationType:"Option", Status: "Active" },
    ];
    const [specificationList, setSpecificationList] = useState();
    useEffect(() => {
        setSpecificationList(SpecificationList);
    }, [])
    return (
        <>
            <div className='pb-6 text-xl uppercase text-black'>
                <h1>Specification Type List</h1>
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
                            return (<tr key={index} >
                                <td className='border border-black p-2'>{index + 1}</td>
                                <td className='border border-black p-2'>{item.SpecificationName}</td>
                                <td className='border border-black p-2'>{item.SpecificationType}</td>
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

export default SpecificationList