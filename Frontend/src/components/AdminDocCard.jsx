import React from 'react'

const AdminDocCard = ({docName, docSpecility, docImg}) => {
  return (
    <div className='flex flex-col md:h-[290px] md:w-[210px] border-[1px] rounded-lg border-[#C9D8FF] cursor-pointer'>

      <div className='Image_container h-[70%] bg-[#EAEFFF] rounded-tr-lg rounded-tl-lg flex items-end justify-center'>
        <img src={docImg} alt="" />
      </div>

      <div className="text_container h-[30%] bg-white rounded-br-lg rounded-bl-lg px-6 py-5 md:px-4 md:py-2">
        <p className='text-xl md:text-lg'>{docName}</p>
        <p className='text-base md:text-sm text-zinc-500'>{docSpecility}</p>
        <div className='flex gap-2'>
            <input type="checkbox" name="available" id="" defaultChecked/>
            <p className='text-zinc-500 text-base md:text-sm'>Available</p>
        </div>
      </div>

    </div>
  )
}

export default AdminDocCard
