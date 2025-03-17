import React, { useState } from 'react'

const AdminDocAuth = () => {

    const [auth, setAuth] = useState("Admin")

  return (
    <div className='max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20'>
        <div className='flex flex-col justify-center h-screen'>
            
            {
                auth === "Admin" ? 
                <div className='flex justify-center'>
                    <div className="box w-[300px] shadow-lg p-6 border-2 border-zinc-200 rounded-xl">
                        <p className='text-xl font-semibold text-zinc-600 text-center'><span className='text-blue-600'>Admin</span> Login</p>
                        <form>
                            <div className='mt-3 flex flex-col'>
                                <label htmlFor="Email" className='text-sm text-zinc-600'>Email</label>
                                <input type="email" id='Email' className='border-[1px] border-zinc-200 w-full rounded-md px-2 py-1'/>
                            </div>
                            <div className='mt-3 flex flex-col'>
                                <label htmlFor="Password" className='text-sm text-zinc-600'>Password</label>
                                <input autoComplete='' type="password" id='Password' className='border-[1px] border-zinc-200 w-full rounded-md px-2 py-1'/>
                            </div>

                            <button className='active2 w-full mt-4'>Login</button>

                            <p className='text-sm text-zinc-600 mt-4'>Doctor Login? <span className='text-blue-600 underline cursor-pointer' onClick={()=>setAuth("Doctor")}>Click here</span></p>
                        </form>
                    </div>
                </div>
                :
                <div className='flex justify-center'>
                    <div className="box w-[300px] shadow-lg p-6 border-2 border-zinc-200 rounded-xl">
                        <p className='text-xl font-semibold text-zinc-600 text-center'><span className='text-blue-600'>Doctor</span> Login</p>
                        <form>
                            <div className='mt-3 flex flex-col'>
                                <label htmlFor="Email" className='text-sm text-zinc-600'>Email</label>
                                <input type="email" id='Email' className='border-[1px] border-zinc-200 w-full rounded-md px-2 py-1'/>
                            </div>
                            <div className='mt-3 flex flex-col'>
                                <label htmlFor="Password" className='text-sm text-zinc-600'>Password</label>
                                <input type="password" id='Password' className='border-[1px] border-zinc-200 w-full rounded-md px-2 py-1'/>
                            </div>

                            <button className='active2 w-full mt-4'>Login</button>

                            <p className='text-sm text-zinc-600 mt-4'>Admin Login? <span className='text-blue-600 underline cursor-pointer' onClick={()=>setAuth("Admin")}>Click here</span></p>
                        </form>
                    </div>
                </div>
            }

        </div>
    </div>
  )
}

export default AdminDocAuth
