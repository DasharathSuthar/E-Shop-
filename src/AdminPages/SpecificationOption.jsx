import React, { useEffect, useState } from 'react'

const SpecificationOption = () => {
    const SpecificationOptionList = [
        { SpecificationName: "Warranty",Value:"2Year", Status: "Active" },
        { SpecificationName: "Color",Value:"Red", Status: "Active" },
        { SpecificationName: "Meter",Value:"90", Status: "Active" },
        { SpecificationName: "Diameter",Value:"1sq", Status: "Active" },
        { SpecificationName: "Feet",Value:"75", Status: "Active" },
        { SpecificationName: "Amp",Value:"20A", Status: "Active" },
        { SpecificationName: "Type",Value:"1Way", Status: "Active" },
    ];
    const [specificationList, setSpecificationList] = useState();
    useEffect(() => {
        setSpecificationList(SpecificationOptionList);
    }, [])
    return (
        <>
            <div className='pb-6 text-xl uppercase text-black'>
                <h1>Specification Option List</h1>
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
                        {(specificationList || []).map((item, index) => {
                            return (<tr key={index} >
                                <td className='border border-black p-2'>{index + 1}</td>
                                <td className='border border-black p-2'>{item.SpecificationName}</td>
                                <td className='border border-black p-2'>{item.Value}</td>
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

export default SpecificationOption