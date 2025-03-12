import React from 'react'
import Logo from "../assets/assets_frontend/Logo.png"

const Footer = () => {
  return (
    <div>
        <div className='max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20'>
        
            <div className='mt-24 md:mt-32 flex flex-col md:flex-row justify-center'>

                <div className="col1 flex flex-col w-full md:w-[50%]">
                    <div className="logo flex gap-2 items-center">
                        <img src={Logo} alt="" width={30}/>
                        <p className='text-2xl font-medium text-[#2F80ED]'>MedEase</p>
                    </div>
                    <p className='text-xs w-full md:w-[70%] text-zinc-600 mt-4 leading-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div className="clo2 md:w-[25%] w-full flex flex-col gap-2 mt-8 md:mt-0">
                    <p className='text-lg font-medium'>COMPANY</p>
                    <p className='text-sm text-zinc-600 mt-2'>Home</p>
                    <p className='text-sm text-zinc-600'>About us</p>
                    <p className='text-sm text-zinc-600'>Delievry</p>
                    <p className='text-sm text-zinc-600'>Privacy policy</p>
                </div>

                <div className="clo3 md:w-[25%] w-full flex flex-col gap-2 mt-8 md:mt-0">
                    <p className='text-lg font-medium'>GET IN TOUCH</p>
                    <p className='text-sm text-zinc-600 mt-2'>+0-000-000-000</p>
                    <p className='text-sm text-zinc-600'>surjeet&Jagu</p>
                </div>

            </div>

            <div className="copy_right mt-8 pt-6 text-xs text-center mb-6 border-t-2 border-zinc-200">
                Copyright 2025 @ surjeet&jagu - All Right Reserved.
            </div>

        </div>
    </div>
  )
}

export default Footer
