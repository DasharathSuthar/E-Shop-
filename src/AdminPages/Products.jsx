import React, { useEffect, useState } from 'react'
import ProductController from '../Controllers/ProductController.js';
import BrandController from '../Controllers/BrandController.js'
import CategoryController from '../Controllers/CategoryController.js'
import SubCategoryController from '../Controllers/SubCategoryController.js'
import ThirdCategoryController from '../Controllers/ThirdCategoryController.js'

const Products = () => {
    var ProductInt = new ProductController()
    var BrandInt = new BrandController()
    var CategoryInt = new CategoryController()
    var SubCategoryInt = new SubCategoryController()
    var ThirdCategoryInt = new ThirdCategoryController()
    // const ProductList = [
    //     { Category: "Wiring and Accessories", SubCategory: "Wires and Cables", ThirdCategory: "Copper Wires", Brand : "Havells",ProductName: " Havells Life Line Plus HR-FR PVC Insulated Copper Conductor Flexible House Cable for Domestic & Industrial Connections Electric Wire",Price:"1986",Discription:"Havells Single Core FR-LSH PVC Insulated Industrial Grade Copper Conductor Unsheathed Flexible Cables provide reliable performance for industrial applications. This single-core cable is flaming retardant, low-smoke, and halogen free. It has a copper conductor with a 1.0-6 sq.mm size. Ensure your business’s safety with its fire-resistant properties ", Status: "Active" },
    //     { Category: "Wiring and Accessories", SubCategory: "Switches and Sockets", ThirdCategory: "Modular Switches", Brand : "Havells",ProductName: " Havells Life Line Plus HR-FR PVC Insulated Copper Conductor Flexible House Cable for Domestic & Industrial Connections Electric Wire",Price:"1986",Discription:"Havells Single Core FR-LSH PVC Insulated Industrial Grade Copper Conductor Unsheathed Flexible Cables provide reliable performance for industrial applications. This single-core cable is flaming retardant, low-smoke, and halogen free. It has a copper conductor with a 1.0-6 sq.mm size. Ensure your business’s safety with its fire-resistant properties ", Status: "Active" },
    //     { Category: "Wiring and Accessories", SubCategory: "Conduits and Fittings", ThirdCategory: "PVC Conduits", Brand : "Havells",ProductName: " Havells Life Line Plus HR-FR PVC Insulated Copper Conductor Flexible House Cable for Domestic & Industrial Connections Electric Wire",Price:"1986",Discription:"Havells Single Core FR-LSH PVC Insulated Industrial Grade Copper Conductor Unsheathed Flexible Cables provide reliable performance for industrial applications. This single-core cable is flaming retardant, low-smoke, and halogen free. It has a copper conductor with a 1.0-6 sq.mm size. Ensure your business’s safety with its fire-resistant properties ", Status: "Active" },
    //     { Category: "Lighting", SubCategory: "Indoor Lighting", ThirdCategory: "LED Bulbs", Brand : "Havells",ProductName: " Havells Life Line Plus HR-FR PVC Insulated Copper Conductor Flexible House Cable for Domestic & Industrial Connections Electric Wire",Price:"1986",Discription:"Havells Single Core FR-LSH PVC Insulated Industrial Grade Copper Conductor Unsheathed Flexible Cables provide reliable performance for industrial applications. This single-core cable is flaming retardant, low-smoke, and halogen free. It has a copper conductor with a 1.0-6 sq.mm size. Ensure your business’s safety with its fire-resistant properties ", Status: "Active" },
    //     { Category: "Lighting", SubCategory: "Outdoor Lighting", ThirdCategory: "Street Light", Brand : "Havells",ProductName: " Havells Life Line Plus HR-FR PVC Insulated Copper Conductor Flexible House Cable for Domestic & Industrial Connections Electric Wire",Price:"1986",Discription:"Havells Single Core FR-LSH PVC Insulated Industrial Grade Copper Conductor Unsheathed Flexible Cables provide reliable performance for industrial applications. This single-core cable is flaming retardant, low-smoke, and halogen free. It has a copper conductor with a 1.0-6 sq.mm size. Ensure your business’s safety with its fire-resistant properties ", Status: "Active" },
    //     { Category: "Lighting", SubCategory: "Decorative Lighting", ThirdCategory: "Wall Light", Brand : "Havells",ProductName: " Havells Life Line Plus HR-FR PVC Insulated Copper Conductor Flexible House Cable for Domestic & Industrial Connections Electric Wire",Price:"1986",Discription:"Havells Single Core FR-LSH PVC Insulated Industrial Grade Copper Conductor Unsheathed Flexible Cables provide reliable performance for industrial applications. This single-core cable is flaming retardant, low-smoke, and halogen free. It has a copper conductor with a 1.0-6 sq.mm size. Ensure your business’s safety with its fire-resistant properties ", Status: "Active" },
    //     { Category: "Switchgear", SubCategory: "Circuit Brackers", ThirdCategory: "Miniature Circuit Brackers", Brand : "Havells",ProductName: " Havells Life Line Plus HR-FR PVC Insulated Copper Conductor Flexible House Cable for Domestic & Industrial Connections Electric Wire",Price:"1986",Discription:"Havells Single Core FR-LSH PVC Insulated Industrial Grade Copper Conductor Unsheathed Flexible Cables provide reliable performance for industrial applications. This single-core cable is flaming retardant, low-smoke, and halogen free. It has a copper conductor with a 1.0-6 sq.mm size. Ensure your business’s safety with its fire-resistant properties ", Status: "Active" },
    //     { Category: "Switchgear", SubCategory: "Fuses", ThirdCategory: "Fuse Switches", Brand : "Havells",ProductName: " Havells Life Line Plus HR-FR PVC Insulated Copper Conductor Flexible House Cable for Domestic & Industrial Connections Electric Wire",Price:"1986",Discription:"Havells Single Core FR-LSH PVC Insulated Industrial Grade Copper Conductor Unsheathed Flexible Cables provide reliable performance for industrial applications. This single-core cable is flaming retardant, low-smoke, and halogen free. It has a copper conductor with a 1.0-6 sq.mm size. Ensure your business’s safety with its fire-resistant properties ", Status: "Active" },
    //     { Category: "Switchgear", SubCategory: "Isolators ans Switch Disconnectors", ThirdCategory: "Isolators", Brand : "Havells",ProductName: " Havells Life Line Plus HR-FR PVC Insulated Copper Conductor Flexible House Cable for Domestic & Industrial Connections Electric Wire",Price:"1986",Discription:"Havells Single Core FR-LSH PVC Insulated Industrial Grade Copper Conductor Unsheathed Flexible Cables provide reliable performance for industrial applications. This single-core cable is flaming retardant, low-smoke, and halogen free. It has a copper conductor with a 1.0-6 sq.mm size. Ensure your business’s safety with its fire-resistant properties ", Status: "Active" },
    //     { Category: "Meters and Instruments", SubCategory: "Energy Meters", ThirdCategory: "Digital Energy Meters", Brand : "Havells",ProductName: " Havells Life Line Plus HR-FR PVC Insulated Copper Conductor Flexible House Cable for Domestic & Industrial Connections Electric Wire",Price:"1986",Discription:"Havells Single Core FR-LSH PVC Insulated Industrial Grade Copper Conductor Unsheathed Flexible Cables provide reliable performance for industrial applications. This single-core cable is flaming retardant, low-smoke, and halogen free. It has a copper conductor with a 1.0-6 sq.mm size. Ensure your business’s safety with its fire-resistant properties ", Status: "Active" },
    //     { Category: "Meters and Instruments", SubCategory: "Multi Meter", ThirdCategory: "Digital MultiMeters", Brand : "Havells",ProductName: " Havells Life Line Plus HR-FR PVC Insulated Copper Conductor Flexible House Cable for Domestic & Industrial Connections Electric Wire",Price:"1986",Discription:"Havells Single Core FR-LSH PVC Insulated Industrial Grade Copper Conductor Unsheathed Flexible Cables provide reliable performance for industrial applications. This single-core cable is flaming retardant, low-smoke, and halogen free. It has a copper conductor with a 1.0-6 sq.mm size. Ensure your business’s safety with its fire-resistant properties ", Status: "Active" },
    //     { Category: "Meters and Instruments", SubCategory: "Insulation Tester", ThirdCategory: "Analog Insulation Tester", Brand : "Havells",ProductName: " Havells Life Line Plus HR-FR PVC Insulated Copper Conductor Flexible House Cable for Domestic & Industrial Connections Electric Wire",Price:"1986",Discription:"Havells Single Core FR-LSH PVC Insulated Industrial Grade Copper Conductor Unsheathed Flexible Cables provide reliable performance for industrial applications. This single-core cable is flaming retardant, low-smoke, and halogen free. It has a copper conductor with a 1.0-6 sq.mm size. Ensure your business’s safety with its fire-resistant properties ", Status: "Active" },
    // ];

    const [categoryList, setCategoryList] = useState([])
    const [subCategoryList, setSubCategoryList] = useState([])
    const [thirdCategoryList, setThirdCategoryList] = useState([])
    const [brandList, setBrandList] = useState([])
    const [formData, setFormData] = useState({
        CategoryId: "",
        SubCategoryId: "",
        ThirdCategoryId: "",
        BrandId: "",
        ProductName: "",
        Price: "",
        Discription: ""
    })
    const [productsList, setProductsList] = useState([]);
    const [editId, setEditId] = useState('')

    const getCategoryData = async () => {
        const CategoryList = await CategoryInt.getData()
        setCategoryList(CategoryList)
    }
    const getSubCategoryList = async () => {
        const subCategoryList = await SubCategoryInt.getData()
        setSubCategoryList(subCategoryList)
    }
    const getThirdCategoryList = async () => {
        const thirdCategoryList = await ThirdCategoryInt.getData()
        setThirdCategoryList(thirdCategoryList)
    }
    const getBrandData = async () => {
        const BrandList = await BrandInt.getData()
        setBrandList(BrandList)
    }

    const insertProductData = async () => {
        await ProductInt.postData(formData).then(res => {
            alert(res.Message)
            setFormData({
                CategoryId: "",
                SubCategoryId: "",
                ThirdCategoryId: "",
                BrandId: "",
                ProductName: "",
                Price: "",
                Discription: ""
            })
            getProductList()
        }).catch(error => console.log(error));
    }

    const getProductList = async () => {
        const ProductList = await ProductInt.getData()
        setProductsList(ProductList)
    }

    const editProductData = async (id) => {
        await ProductInt.getDataById(id).then(res => {
            setEditId(id)
            setFormData({
                CategoryId: res.CategoryId,
                SubCategoryId: res.SubCategoryId,
                ThirdCategoryId: res.ThirdCategoryId,
                BrandId: res.BrandId,
                ProductName: res.ProductName,
                Price: res.Price,
                Discription: res.Discription
            })
            document.querySelector('#AddBtn').classList.add('hidden')
            document.querySelector('#UpdateBtn').classList.remove('hidden')
        }).catch(error => console.log(error))
    }

    const updateProductData = async () => {
        await ProductInt.updateData(editId, formData).then(res => {
            alert(res.Message)
            setFormData({
                CategoryId: "",
                SubCategoryId: "",
                ThirdCategoryId: "",
                BrandId: "",
                ProductName: "",
                Price: "",
                Discription: ""
            })
            document.querySelector('#AddBtn').classList.remove('hidden')
            document.querySelector('#UpdateBtn').classList.add('hidden')
            getProductList()
        })
    }

    const deleteProductData = async (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this sub-category?');
        if (!confirmed) return;
        
        await ProductInt.deleteData(id).then(res => {
            alert(res.Message)
            getProductList()
        })
    }
    useEffect(() => {
        getProductList()
        getCategoryData()
        getSubCategoryList()
        getThirdCategoryList()
        getBrandData()
    }, [])
    return (
        <>
            <div className='pb-6 text-xl uppercase text-black'>
                <h1>Products List</h1>
            </div>
            <div className='p-1 mb-2 flex justify-between items-center'>
                <div className='flex flex-wrap  gap-1  items-center [&>*]:mb-0  '>
                    <div className='flex justify-between items-center w-[400px]'>
                        <label htmlFor="ProductName" className='mr-4 uppercase'>Product Name : </label>
                        <textarea placeholder='Product Name' rows={1} value={formData.ProductName} onChange={(e) => setFormData({ ...formData, ProductName: e.target.value })} className='w-[190px] border-black border rounded-md p-1 mr-4' />
                    </div>

                    <div className='flex justify-between items-center w-[400px]'>
                        <label htmlFor="Price" className='mr-4 uppercase'>Price:</label>
                        <input type="number" placeholder='Product Price' value={formData.Price} onChange={(e) => setFormData({ ...formData, Price: e.target.value })} className='w-[190px] border-black border rounded-md p-1 mr-4' />
                    </div>

                    <div className='flex justify-between items-center w-[400px]'>
                        <label htmlFor="Discription" className='mr-4 uppercase'>Discription:</label>
                        <textarea rows={1} placeholder='Product Discription' value={formData.Discription} onChange={(e) => setFormData({ ...formData, Discription: e.target.value })} className='w-[190px] border-black border rounded-md p-1 mr-4' />
                    </div>

                    <div className='flex justify-between items-center w-[400px]'>
                        <label htmlFor="Brand" className='mr-4 uppercase'>Brand:</label>
                        <select
                            value={formData.BrandId}
                            onChange={e => setFormData({ ...formData, BrandId: e.target.value })}
                            className='border-black w-[190px] border rounded-md p-1 mr-4 text-black'
                        >
                            <option value="">Select Brand</option>
                            {brandList.map((brand) => (
                                <option key={brand._id} value={brand._id}>{brand.Brand}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='flex flex-wrap gap-1 items-center'>

                    <select
                        value={formData.CategoryId}
                        onChange={e => setFormData({ ...formData, CategoryId: e.target.value })}
                        className='border-black border rounded-md p-1 mr-4 text-black'
                    >
                        <option value="">Select Category</option>
                        {categoryList.map((cat) => (
                            <option key={cat._id} value={cat._id}>{cat.Category}</option>
                        ))}
                    </select>
                    <select
                        value={formData.SubCategoryId}
                        onChange={e => setFormData({ ...formData, SubCategoryId: e.target.value })}
                        className='border-black border w-[200px] rounded-md p-1 mr-4 text-black'
                    >
                        <option value="">Select SubCategory</option>
                        {subCategoryList
                            .filter(sub => sub.CategoryId._id === formData.CategoryId)
                            .map((cat) => (
                                <option key={cat._id} value={cat._id}>{cat.SubCategory}</option>
                            ))}
                    </select>
                    <select
                        value={formData.ThirdCategoryId}
                        onChange={e => setFormData({ ...formData, ThirdCategoryId: e.target.value })}
                        className='border-black border w-[200px] rounded-md p-1 mr-4 text-black'
                    >
                        <option value="">Select ThirdCategory</option>
                        {thirdCategoryList
                            .filter(third => third.SubCategoryId._id === formData.SubCategoryId)
                            .map((cat) => (
                                <option key={cat._id} value={cat._id}>{cat.ThirdCategory}</option>
                            ))}
                    </select>
                </div>
                <div className='flex flex-wrap  gap-1 items-center'>
                    <button
                        id='AddBtn'
                        className='py-2 px-5 w-40 bg-blue-500 rounded-md text-white uppercase hover:bg-blue-700 duration-300'
                        onClick={insertProductData}
                    >
                        Add Product
                    </button>
                    <button id='UpdateBtn' className='py-2 px-5 ml-2 hidden bg-green-500 rounded-md text-white uppercase hover:bg-green-700 duration-300' onClick={updateProductData}>Update</button>
                </div>
            </div>
            <div className="grid grid-cols-1 ">
                <table className='text-center  w-full overflow-x-auto'>
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
                                <td className='border border-black p-2'>{item.CategoryId?.Category}</td>
                                <td className='border border-black p-2'>{item.SubCategoryId?.SubCategory}</td>
                                <td className='border border-black p-2'>{item.ThirdCategoryId?.ThirdCategory}</td>
                                <td className='border border-black p-2'>{item.BrandId?.Brand}</td>
                                <td className='border border-black p-2'>
                                    <textarea value={item.ProductName} className='border outline-none border-black p-2' name="productname" readOnly></textarea>
                                </td>
                                <td className='border border-black p-2'>{item.Price}</td>
                                <td className='border border-black p-2'>
                                    <textarea value={item.Discription} className='border outline-none border-black p-2' name="discription" readOnly ></textarea>
                                </td>
                                <td className='border border-black p-2'>{item.Status}</td>
                                <td className='border border-black p-2'>
                                    <button className='px-5 py-2 rounded-lg bg-blue-700 text-white text-center' onClick={() => editProductData(item._id)}>Edit</button>
                                </td>
                                <td className='border border-black p-2'>
                                    <button className='px-5 py-2 rounded-lg bg-red-700 text-white text-center' onClick={() => deleteProductData(item._id)}>Delete</button>
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