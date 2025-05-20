import React from 'react'
import Logo from "../../../public/assets/img/PackBag-logo.png"
const SideBar = () => {
    return (
        <>
            <aside className='bg-black w-64  '>
                <div className="container px-3 ">
                    <a href="/dashboard" className='block py-1 border-b border-gray-500'>
                        <div className="logo w-[70%]">
                            <img src={Logo} alt="" />
                        </div>
                    </a>
                    <ul className='flex flex-col py-4 text-white '>
                        <li className='nav-list'><a href="/admin/dashboard" className='py-2 block'><i className='mr-4 fas fa-fw fa-tachometer-alt'></i>Dashboard</a></li>
                        <li className='nav-list'><a href="/admin/categoryList" className='py-2 block'><i className='mr-4 fas fa-luggage-cart'></i>Category</a></li>
                        <li className='nav-list'><a href="/admin/subcategoryList" className='py-2 block'><i className='mr-4 fas fa-cart-arrow-down'></i>Sub-Category</a></li>
                        <li className='nav-list'><a href="/admin/thirdcategoryList" className='py-2 block'><i className='mr-4 fas fa-suitcase-rolling'></i>Third-Category</a></li>
                        <li className='nav-list'><a href="/admin/brand" className='py-2 block'><i className='mr-4 fas fa-toolbox'></i>Brand</a></li>
                        <li className='nav-list'><a href="/admin/product" className='py-2 block'><i className='mr-4 fas fa-list'></i>Product</a></li>
                        <li className='nav-list'><a href="#" className='py-2 block'><i className='mr-4 fas fa-shipping-fast'></i>Order</a></li>
                        <li className='nav-list'><a href="/admin/country" className='py-2 block'><i className='mr-4 fas fa-globe'></i>Country</a></li>
                        <li className='nav-list'><a href="/admin/state" className='py-2 block'><i className='mr-4 fab fa-font-awesome-flag'></i>State</a></li>
                        <li className='nav-list'><a href="/admin/city" className='py-2 block'><i className='mr-4 fas fa-city'></i>City</a></li>
                        <li className='nav-list'><a href="/admin/area" className='py-2 block'><i className='mr-4 fa fa-location-arrow'></i>Area</a></li>
                        <li className='nav-list'><a href="/admin/specificationtype" className='py-2 block'><i className='mr-4 fab fa-schlix'></i>Specification Type</a></li>
                        <li className='nav-list'><a href="/admin/specificationoption" className='py-2 block'><i className='mr-4 fab fa-schlix'></i>Specification Option</a></li>
                        <li><a href="#" className='py-2 block'><i className='mr-4 fas fa-fw fa-folder'></i>Report</a></li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default SideBar