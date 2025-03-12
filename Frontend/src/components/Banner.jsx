import React from 'react'
import appointment_img from "../assets/assets_frontend/appointment_img.png"

const Banner = () => {
  return (
    <div>
      <div className='max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20'>
        
        <div className='mt-16 md:mt-24 flex flex-col justify-center'>
            <div className='bg-gradient-to-b from-[#5F6FFF] to-[#625fff] w-full h-[55vh] rounded-xl relative flex justify-between items-center'>

                <div className="inline-flex flex-col w-full md:w-[50%] md:pl-20 items-center md:items-start">
                    <p className='font-semibold text-white text-4xl lg:text-5xl text-center md:text-start'>Book Appointment With 100+ Trusted Doctors</p>
                    <button className='mt-8 bg-white text-zinc-600 px-8 py-3 rounded-full'>Create account</button>
                </div>

                <div className="img absolute right-0 justify-center bottom-0 w-[50%] hidden md:flex">
                    <img src={appointment_img} className='w-[55vh]' alt="" />
                </div>

            </div>
        </div>

      </div>
    </div>
  )
}

export default Banner
