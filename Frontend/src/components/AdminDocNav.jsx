import React from 'react'
import Logo from "../assets/assets_frontend/Logo.png"
import { Link } from 'react-router-dom'

const AdminDocNav = ({pannelName, pannelLink}) => {
  return (
      <div className='max-w-[1440px] mx-auto px-4 border-b-2 border-zinc-200'>

        <div className="nav_container h-20 flex items-center justify-between">

          <Link to={pannelLink} className='flex flex-col'>
            <div className="logo flex gap-2 items-center">
              <img src={Logo} alt="" width={30}/>
              <p className='text-2xl font-medium text-[#2F80ED]'>MedEase</p>  
            </div>

            <div className='inline-flex justify-end'>
              <p className='text-xs text-zinc-600 border-[1px] border-zinc-600 rounded-full px-4'>
                {pannelName}
              </p>
            </div>
          </Link>

          <Link to={"/Admin"}>
            <button className='bg-[#2F80ED] text-white px-8 py-2 rounded-full text-sm'>
              Logout
            </button>
          </Link>

        </div>

      </div>
  )
}

export default AdminDocNav
