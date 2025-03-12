import React from 'react'

const Card = ({docName, docSpecility, docImg}) => {
  return (
    <div className='flex flex-col md:h-[290px] md:w-[210px] border-[1px] rounded-lg border-[#C9D8FF] cursor-pointer'>

      <div className='Image_container h-[70%] bg-[#EAEFFF] rounded-tr-lg rounded-tl-lg flex items-end justify-center'>
        <img src={docImg} alt="" />
      </div>

      <div className="text_container h-[30%] bg-white rounded-br-lg rounded-bl-lg px-6 py-5 md:px-4 md:py-2">
        <p className='text-green-500 flex items-center gap-2 text-base md:text-sm'><div className='w-2 h-2 rounded-full bg-green-500'></div>Available</p>
        <p className='text-xl md:text-lg'>{docName}</p>
        <p className='text-base md:text-sm text-zinc-500'>{docSpecility}</p>
      </div>

    </div>
  )
}

export default Card
