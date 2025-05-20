import React, { useEffect, useState } from 'react'


const ThirdCategory = () => {
    const SubCategoryList = [
        { Category: "Wiring and Accessories", SubCategory: "Wires and Cables", ThirdCategory: "Copper Wires", Status: "Active" },
        { Category: "Wiring and Accessories", SubCategory: "Switches and Sockets", ThirdCategory: "Modular Switches", Status: "Active" },
        { Category: "Wiring and Accessories", SubCategory: "Conduits and Fittings", ThirdCategory: "PVC Conduits", Status: "Active" },
        { Category: "Lighting", SubCategory: "Indoor Lighting", ThirdCategory: "LED Bulbs", Status: "Active" },
        { Category: "Lighting", SubCategory: "Outdoor Lighting", ThirdCategory: "Street Light", Status: "Active" },
        { Category: "Lighting", SubCategory: "Decorative Lighting", ThirdCategory: "Wall Light", Status: "Active" },
        { Category: "Switchgear", SubCategory: "Circuit Brackers", ThirdCategory: "Miniature Circuit Brackers", Status: "Active" },
        { Category: "Switchgear", SubCategory: "Fuses", ThirdCategory: "Fuse Switches", Status: "Active" },
        { Category: "Switchgear", SubCategory: "Isolators ans Switch Disconnectors", ThirdCategory: "Isolators", Status: "Active" },
        { Category: "Meters and Instruments", SubCategory: "Energy Meters", ThirdCategory: "Digital Energy Meters", Status: "Active" },
        { Category: "Meters and Instruments", SubCategory: "Multi Meter", ThirdCategory: "Digital MultiMeters", Status: "Active" },
        { Category: "Meters and Instruments", SubCategory: "Insulation Tester", ThirdCategory: "Analog Insulation Tester", Status: "Active" },
    ];
    const [categoryList, setCategoryList] = useState();
    useEffect(() => {
        setCategoryList(SubCategoryList);
    }, [])
    return (
        <>
            <div className='pb-6 text-xl uppercase text-black'>
                <h1>Third-Category</h1>
            </div>
            <div className="grid grid-cols-1">
                <table className='text-center'>
                    <thead>
                        <tr>
                            <th className='border border-black'>ID</th>
                            <th className='border border-black'>Category Id</th>
                            <th className='border border-black'>Sub Category Id</th>
                            <th className='border border-black'>Third Category </th>
                            <th className='border border-black'>Status</th>
                            <th className='border border-black'>Edit</th>
                            <th className='border border-black'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(categoryList || []).map((item, index) => {
                            return (<tr key={index} >
                                <td className='border border-black p-2'>{index + 1}</td>
                                <td className='border border-black p-2'>{item.Category}</td>
                                <td className='border border-black p-2'>{item.SubCategory}</td>
                                <td className='border border-black p-2'>{item.ThirdCategory}</td>
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

export default ThirdCategory