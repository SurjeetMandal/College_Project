import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from "../assets/assets_frontend/Logo.png"
import MenuOpenLogo from "../assets/assets_frontend/menu_icon.svg"
import MenuCloseLogo from "../assets/assets_frontend/cross_icon.png"

const NavBar = () => {

  const location = useLocation()
  const [menuState, setMenuState] = useState("close")

  return (
    <>
        <div className='max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 hidden sm:block '>

            <div className="nav_container h-20 flex items-center justify-between border-b-2 border-zinc-200">

                <Link to={"/"}>
                    <div className="logo flex gap-2 items-center">
                        <img src={Logo} alt="" width={30}/>
                        <p className='text-2xl font-medium text-[#2F80ED]'>MedEase</p>  
                    </div>
                </Link>

                <div className="nav_links text-[13px] font-medium antialiased flex gap-7 text-gray-700">
                    <Link className={location.pathname === '/' ? "active" : ""} to={'/'}>HOME</Link>
                    <Link className={location.pathname === '/AllDoc' ? "active" : ""} to={'/AllDoc'}>ALL DOCTORS</Link>
                    <Link className={location.pathname === '/About' ? "active" : ""} to={'/About'}>ABOUT</Link>
                    <Link className={location.pathname === '/Contact' ? "active" : ""} to={'/Contact'}>CONTACT</Link>
                </div>

                <div className="account_detail">
                    <Link to={"/Auth"}>
                        <button className='bg-[#2F80ED] text-white px-6 py-2 rounded-full text-sm'>
                            Create account
                        </button>
                    </Link>
                </div>

            </div>

        </div>

        <div className='max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 block sm:hidden h-14'>

            <div className='flex h-full items-center justify-between border-b-2 border-zinc-200'>

                <Link to={"/"}>
                    <div className="logo flex gap-2 items-center">
                        <img src={Logo} alt="" width={30}/>
                        <p className='text-2xl font-medium text-[#2F80ED]'>MedEase</p>  
                    </div>
                </Link>

                {
                    menuState === "close" ? 
                    <div>
                        <img src={MenuOpenLogo} width={25} alt="" onClick={()=>setMenuState("open")}/>
                    </div>
                    :
                    <div>
                        <div className='z-20 absolute w-full h-full left-0 top-0 bg-white'>

                            <div className='flex px-4 justify-between mt-3'>
                                <div className="logo flex gap-2 items-center">
                                    <img src={Logo} alt="" width={30}/>
                                    <p className='text-2xl font-medium text-[#2F80ED]'>MedEase</p>
                                </div>
                                <img src={MenuCloseLogo} className='z-30' width={30} alt="" onClick={()=>setMenuState("close")}/>
                            </div>

                            <div className="nav_links text-lg font-medium antialiased flex flex-col mt-20 items-center gap-5">
                                <Link className={location.pathname === '/' ? "active2" : ""} to={'/'}>HOME</Link>
                                <Link className={location.pathname === '/AllDoc' ? "active2" : ""} to={'/AllDoc'}>ALL DOCTORS</Link>
                                <Link className={location.pathname === '/About' ? "active2" : ""} to={'/About'}>ABOUT</Link>
                                <Link className={location.pathname === '/Contact' ? "active2" : ""} to={'/Contact'}>CONTACT</Link>
                            </div>

                            <Link to={"/Auth"}>
                                <div className="account_detail flex justify-center">
                                    <button className='bg-[#2F80ED] text-white px-6 py-2 rounded-full text-lg mt-20'>
                                        Create account
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                }
            </div>

        </div>
    </>
  )
}

export default NavBar
