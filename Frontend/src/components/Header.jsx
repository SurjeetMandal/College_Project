import React from 'react'
import star from "../assets/assets_frontend/Star.png"
import arrowRight from "../assets/assets_frontend/arrow_icon.svg"
import heroImg from "../assets/assets_frontend/Hero Image.png"

const Header = () => {
  return (
    <div>
      <div className='max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20'>
        <div className='h-full md:h-[85vh] flex flex-col md:flex-row items-center'>

          <div className="header_txt md:w-6/12">

            <p className='inline-flex border-dotted border-2 border-[#2F80ED] py-1 mt-8 md:mt-0 text-sm lg:text-base gap-2 bg-[#F2F7FF] text-[#2F80ED] items-center px-3 rounded-full'><img src={star} className='w-3 h-3' alt="" />
              #1 choice for healthcare appointments by users
            </p>

            <p className='text-5xl lg:text-6xl mt-8'>
              Connecting You <span className='italic text-[#2F80ED]'>to</span> Better Health
            </p>

            <p className='mt-8 text-gray-500 w-[90%]'>
              We're here to link you directly to improved health outcomes, effortlessly connecting you with the care you need.
            </p>

            <button className='flex gap-2 items-center bg-[#2F80ED] text-white px-6 py-2 rounded-full mt-8'>
              Book appointment <img src={arrowRight} width={15} alt="" />
            </button>

          </div>

          <div className="header_img md:w-6/12 flex justify-end">
            <img src={heroImg} className='w-full md:w-[80%] mt-8 md:mt-0' alt="" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header
