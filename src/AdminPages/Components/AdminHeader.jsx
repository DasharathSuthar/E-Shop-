import React from 'react'
import Logo from "../../../public/assets/img/AdminLogo.jpg"

const AdminHeader = () => {
  return (
    <>
        <header className='h-[87px] bg-gray-600 px-3 flex justify-end items-center shadow-md'>
            <div className="container">
              <div className="row flex justify-end items-center  py-3">
                <div className="admin-logo h-10 w-10 flex  items-center border-white mr-4">
                  <img src={Logo} alt="" className='rounded-full border text-center' />
                </div>
                <h1 className='font-bold text-white uppercase'>E-Shop Admin</h1>
              </div>
            </div>
        </header>
    </>
  )
}

export default AdminHeader