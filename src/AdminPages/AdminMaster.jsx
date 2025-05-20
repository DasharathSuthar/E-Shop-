import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './Components/SideBar'
import AdminHeader from './Components/AdminHeader'

const AdminMaster = () => {
    return (
        <>
            <div className="flex ">
                <SideBar></SideBar>
                <div className="flex-1 bg-gray-200">
                    <AdminHeader></AdminHeader>
                    <div className="p-10 ">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminMaster