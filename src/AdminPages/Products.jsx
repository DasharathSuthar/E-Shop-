import React, { useEffect, useState } from 'react'


const Products = () => {
    const ProductList = [
        { Category: "Wiring and Accessories", SubCategory: "Wires and Cables", ThirdCategory: "Copper Wires", Brand : "Havells",ProductName: " Havells Life Line Plus HR-FR PVC Insulated Copper Conductor Flexible House Cable for Domestic & Industrial Connections Electric Wire",Price:"1986",Discription:"Havells Single Core FR-LSH PVC Insulated Industrial Grade Copper Conductor Unsheathed Flexible Cables provide reliable performance for industrial applications. This single-core cable is flaming retardant, low-smoke, and halogen free. It has a copper conductor with a 1.0-6 sq.mm size. Ensure your business’s safety with its fire-resistant properties ", Status: "Active" },
        { Category: "Wiring and Accessories", SubCategory: "Switches and Sockets", ThirdCategory: "Modular Switches", Brand : "Havells",ProductName: " Havells Life Line Plus HR-FR PVC Insulated Copper Conductor Flexible House Cable for Domestic & Industrial Connections Electric Wire",Price:"1986",Discription:"Havells Single Core FR-LSH PVC Insulated Industrial Grade Copper Conductor Unsheathed Flexible Cables provide reliable performance for industrial applications. This single-core cable is flaming retardant, low-smoke, and halogen free. It has a copper conductor with a 1.0-6 sq.mm size. Ensure your business’s safety with its fire-resistant properties ", Status: "Active" },
        { Category: "Wiring and Accessories", SubCategory: "Conduits and Fittings", ThirdCategory: "PVC Conduits", Brand : "Havells",ProductName: " Havells Life Line Plus HR-FR PVC Insulated Copper Conductor Flexible House Cable for Domestic & Industrial Connections Electric Wire",Price:"1986",Discription:"Havells Single Core FR-LSH PVC Insulated Industrial Grade Copper Conductor Unsheathed Flexible Cables provide reliable performance for industrial applications. This single-core cable is flaming retardant, low-smoke, and halogen free. It has a copper conductor with a 1.0-6 sq.mm size. Ensure your business’s safety with its fire-resistant properties ", Status: "Active" },
        { Category: "Lighting", SubCategory: "Indoor Lighting", ThirdCategory: "LED Bulbs", Brand : "Havells",ProductName: " Havells Life Line Plus HR-FR PVC Insulated Copper Conductor Flexible House Cable for Domestic & Industrial Connections Electric Wire",Price:"1986",Discription:"Havells Single Core FR-LSH PVC Insulated Industrial Grade Copper Conductor Unsheathed Flexible Cables provide reliable performance for industrial applications. This single-core cable is flaming retardant, low-smoke, and halogen free. It has a copper conductor with a 1.0-6 sq.mm size. Ensure your business’s safety with its fire-resistant properties ", Status: "Active" },
        { Category: "Lighting", SubCategory: "Outdoor Lighting", ThirdCategory: "Street Light", Brand : "Havells",ProductName: " Havells Life Line Plus HR-FR PVC Insulated Copper Conductor Flexible House Cable for Domestic & Industrial Connections Electric Wire",Price:"1986",Discription:"Havells Single Core FR-LSH PVC Insulated Industrial Grade Copper Conductor Unsheathed Flexible Cables provide reliable performance for industrial applications. This single-core cable is flaming retardant, low-smoke, and halogen free. It has a copper conductor with a 1.0-6 sq.mm size. Ensure your business’s safety with its fire-resistant properties ", Status: "Active" },
        { Category: "Lighting", SubCategory: "Decorative Lighting", ThirdCategory: "Wall Light", Brand : "Havells",ProductName: " Havells Life Line Plus HR-FR PVC Insulated Copper Conductor Flexible House Cable for Domestic & Industrial Connections Electric Wire",Price:"1986",Discription:"Havells Single Core FR-LSH PVC Insulated Industrial Grade Copper Conductor Unsheathed Flexible Cables provide reliable performance for industrial applications. This single-core cable is flaming retardant, low-smoke, and halogen free. It has a copper conductor with a 1.0-6 sq.mm size. Ensure your business’s safety with its fire-resistant properties ", Status: "Active" },
        { Category: "Switchgear", SubCategory: "Circuit Brackers", ThirdCategory: "Miniature Circuit Brackers", Brand : "Havells",ProductName: " Havells Life Line Plus HR-FR PVC Insulated Copper Conductor Flexible House Cable for Domestic & Industrial Connections Electric Wire",Price:"1986",Discription:"Havells Single Core FR-LSH PVC Insulated Industrial Grade Copper Conductor Unsheathed Flexible Cables provide reliable performance for industrial applications. This single-core cable is flaming retardant, low-smoke, and halogen free. It has a copper conductor with a 1.0-6 sq.mm size. Ensure your business’s safety with its fire-resistant properties ", Status: "Active" },
        { Category: "Switchgear", SubCategory: "Fuses", ThirdCategory: "Fuse Switches", Brand : "Havells",ProductName: " Havells Life Line Plus HR-FR PVC Insulated Copper Conductor Flexible House Cable for Domestic & Industrial Connections Electric Wire",Price:"1986",Discription:"Havells Single Core FR-LSH PVC Insulated Industrial Grade Copper Conductor Unsheathed Flexible Cables provide reliable performance for industrial applications. This single-core cable is flaming retardant, low-smoke, and halogen free. It has a copper conductor with a 1.0-6 sq.mm size. Ensure your business’s safety with its fire-resistant properties ", Status: "Active" },
        { Category: "Switchgear", SubCategory: "Isolators ans Switch Disconnectors", ThirdCategory: "Isolators", Brand : "Havells",ProductName: " Havells Life Line Plus HR-FR PVC Insulated Copper Conductor Flexible House Cable for Domestic & Industrial Connections Electric Wire",Price:"1986",Discription:"Havells Single Core FR-LSH PVC Insulated Industrial Grade Copper Conductor Unsheathed Flexible Cables provide reliable performance for industrial applications. This single-core cable is flaming retardant, low-smoke, and halogen free. It has a copper conductor with a 1.0-6 sq.mm size. Ensure your business’s safety with its fire-resistant properties ", Status: "Active" },
        { Category: "Meters and Instruments", SubCategory: "Energy Meters", ThirdCategory: "Digital Energy Meters", Brand : "Havells",ProductName: " Havells Life Line Plus HR-FR PVC Insulated Copper Conductor Flexible House Cable for Domestic & Industrial Connections Electric Wire",Price:"1986",Discription:"Havells Single Core FR-LSH PVC Insulated Industrial Grade Copper Conductor Unsheathed Flexible Cables provide reliable performance for industrial applications. This single-core cable is flaming retardant, low-smoke, and halogen free. It has a copper conductor with a 1.0-6 sq.mm size. Ensure your business’s safety with its fire-resistant properties ", Status: "Active" },
        { Category: "Meters and Instruments", SubCategory: "Multi Meter", ThirdCategory: "Digital MultiMeters", Brand : "Havells",ProductName: " Havells Life Line Plus HR-FR PVC Insulated Copper Conductor Flexible House Cable for Domestic & Industrial Connections Electric Wire",Price:"1986",Discription:"Havells Single Core FR-LSH PVC Insulated Industrial Grade Copper Conductor Unsheathed Flexible Cables provide reliable performance for industrial applications. This single-core cable is flaming retardant, low-smoke, and halogen free. It has a copper conductor with a 1.0-6 sq.mm size. Ensure your business’s safety with its fire-resistant properties ", Status: "Active" },
        { Category: "Meters and Instruments", SubCategory: "Insulation Tester", ThirdCategory: "Analog Insulation Tester", Brand : "Havells",ProductName: " Havells Life Line Plus HR-FR PVC Insulated Copper Conductor Flexible House Cable for Domestic & Industrial Connections Electric Wire",Price:"1986",Discription:"Havells Single Core FR-LSH PVC Insulated Industrial Grade Copper Conductor Unsheathed Flexible Cables provide reliable performance for industrial applications. This single-core cable is flaming retardant, low-smoke, and halogen free. It has a copper conductor with a 1.0-6 sq.mm size. Ensure your business’s safety with its fire-resistant properties ", Status: "Active" },
    ];
    const [productsList, setProductsList] = useState();
    useEffect(() => {
        setProductsList(ProductList);
    }, [])
    return (
        <>
            <div className='pb-6 text-xl uppercase text-black'>
                <h1>Products List</h1>
            </div>
            <div className="grid grid-cols-1 ">
                <table className='text-center block w-full overflow-x-auto'>
                    <thead>
                        <tr>
                            <th className='border border-black'>ID</th>
                            <th className='border border-black'>Category</th>
                            <th className='border border-black'>Sub Category</th>
                            <th className='border border-black'>Third Category</th>
                            <th className='border border-black'>Brand</th>
                            <th className='border border-black'>Product Name</th>
                            <th className='border border-black'>Price</th>
                            <th className='border border-black'>Discription</th>
                            <th className='border border-black'>Status</th>
                            <th className='border border-black'>Edit</th>
                            <th className='border border-black'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(productsList || []).map((item, index) => {
                            return (<tr key={index} >
                                <td className='border border-black p-2'>{index + 1}</td>
                                <td className='border border-black p-2'>{item.Category}</td>
                                <td className='border border-black p-2'>{item.SubCategory}</td>
                                <td className='border border-black p-2'>{item.ThirdCategory}</td>
                                <td className='border border-black p-2'>{item.Brand}</td>
                                <td className='border border-black p-2'>
                                    <textarea className='border border-black p-2' name="productname">{item.ProductName}</textarea>
                                </td>
                                <td className='border border-black p-2'>{item.Price}</td>
                                <td className='border border-black p-2'>
                                    <textarea className='border border-black p-2' name="discription" >{item.Discription}</textarea>
                                </td>
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

export default Products