import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Auth = () => {

    const [auth, setAuth] = useState("signin")

  return (
    <div>
      <NavBar />

      <div className='max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20'>
        <div className='mt-16 md:mt-24 flex flex-col justify-center'>
            
            {
                auth === "signin" ? 
                <div className='flex justify-center'>
                    <div className="box w-[300px] shadow-lg p-6 border-2 border-zinc-200 rounded-xl">
                        <p className='text-xl font-semibold text-zinc-600'>Create Account</p>
                        <p className='mt-2 text-xs text-zinc-600'>Please sign up to book appointment</p>
                        <form>

                            <div className='mt-3 flex flex-col'>
                                <label htmlFor="Name" className='text-sm text-zinc-600'>Full Name</label>
                                <input type="text" id='Name' className='border-[1px] border-zinc-200 w-full rounded-md px-2 py-1'/>
                            </div>
                            <div className='mt-3 flex flex-col'>
                                <label htmlFor="Email" className='text-sm text-zinc-600'>Email</label>
                                <input type="email" id='Email' className='border-[1px] border-zinc-200 w-full rounded-md px-2 py-1'/>
                            </div>
                            <div className='mt-3 flex flex-col'>
                                <label htmlFor="Password" className='text-sm text-zinc-600'>Password</label>
                                <input autoComplete='' type="password" id='Password' className='border-[1px] border-zinc-200 w-full rounded-md px-2 py-1'/>
                            </div>

                            <button className='active2 w-full mt-4'>Create Account</button>

                            <p className='text-sm text-zinc-600 mt-4'>Already have an account? <span className='text-blue-600 underline cursor-pointer' onClick={()=>setAuth("login")}>Login here</span></p>
                        </form>
                    </div>
                </div>
                :
                <div className='flex justify-center'>
                    <div className="box w-[300px] shadow-lg p-6 border-2 border-zinc-200 rounded-xl">
                        <p className='text-xl font-semibold text-zinc-600'>Login</p>
                        <p className='mt-2 text-xs text-zinc-600'>Please log in to book appointment</p>
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

                            <p className='text-sm text-zinc-600 mt-4'>Create an new account? <span className='text-blue-600 underline cursor-pointer' onClick={()=>setAuth("signin")}>Login here</span></p>
                        </form>
                    </div>
                </div>
            }

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Auth
