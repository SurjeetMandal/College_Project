import React from 'react'
import { doctors } from "../assets/assets_frontend/assets.js"
import Card from './Card.jsx'

const TopDoc = () => {
  return (
    <div>
      <div className='max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20'>
        <div className='mt-16 md:mt-24 flex flex-col justify-center'>

            <div className="heading">
                Top Doctors to Book
            </div>

            <div className="sub_heading max-w-[95%] md:max-w-[60%] lg:max-w-[40%] self-center">
                Simply browse through our extensive list of trusted doctors.
            </div>

            <div className="docContainer flex flex-wrap gap-4 mt-8 justify-center">
                {
                    doctors.map((items, index) => (
                        <div key={index}>
                            <Card docName={items.name} docSpecility={items.speciality} docImg={items.image}/>
                        </div>
                    ))
                }
            </div>

            <div className="btn flex justify-center">
                <button className='px-10 py-3 text-zinc-600 bg-[#EAEFFF] mt-14 rounded-full'>more</button>
            </div>

        </div>
      </div>
    </div>
  )
}

export default TopDoc
