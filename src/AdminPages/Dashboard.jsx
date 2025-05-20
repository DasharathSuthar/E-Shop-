import React from 'react'
import DashboardCard from './Components/DashboardCard'

const Dashboard = () => {
  return (
    <>
      
            <div className='pb-6 text-xl uppercase text-black'>
              <h1>Dashboard</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <DashboardCard title="Earnings (Today)" value="₹0" borderColor="#3b82f6" />
              <DashboardCard title="Today Order" value="0" borderColor="#10b981" />
              <DashboardCard title="Today User" value="0" borderColor="#f59e0b" />
              <DashboardCard title="Earnings (Month)" value="10102565.00" borderColor="#6366f1" />
              <DashboardCard title="Month Order" value="8" borderColor="#06b6d4" />
              <DashboardCard title="Month User" value="0" borderColor="#8b5cf6" />
              <DashboardCard title="Earnings (Year)" value="₹1600357" borderColor="#ef4444" />
              <DashboardCard title="Year Order" value="17" borderColor="#14b8a6" />
              <DashboardCard title="Year User" value="0" borderColor="#0ea5e9" />
            </div>
          
    </>
  )
}

export default Dashboard