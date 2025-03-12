import React from 'react'
import { specialityData } from "../assets/assets_frontend/assets.js"

const Specility = () => {
  return (
    <div>
      <div className='max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20'>
        <div className='mt-16 md:mt-24 flex flex-col justify-center'>

            <div className="heading">
                Find by Speciality
            </div>

            <div className="sub_heading max-w-[95%] md:max-w-[60%] lg:max-w-[40%] self-center">
                Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
            </div>

            <div className='flex justify-center gap-6 mt-8 flex-wrap'>
            { 
                specialityData.map((items, index) => (
                    <div key={index}>
                         <div className='flex flex-col justify-center items-center'>
                            <img src={items.image} width={100} alt="" />
                            <p className='text-xs mt-2'>{items.speciality}</p>
                         </div>
                    </div>
                ))
            }
            </div>

        </div>
      </div>
    </div>
  )
}

export default Specility
