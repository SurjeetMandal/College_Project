import React, { useState } from 'react'
import AdminDocNav from '../components/AdminDocNav'
import DashImg from "../assets/assets_admin/home_icon.svg"
import AppointImg from "../assets/assets_admin/appointment_icon.svg"
import AddDocImg from "../assets/assets_admin/add_icon.svg"
import DocListImg from "../assets/assets_admin/people_icon.svg"
import AppointIcon from "../assets/assets_admin/appointments_icon.svg"
import PatientsIcom from "../assets/assets_admin/patients_icon.svg"
import TableImg from "../assets/assets_admin/list_icon.svg"
import PatientImg from "../assets/assets_admin/upload_area.svg"
import CrossImg from "../assets/assets_admin/cancel_icon.svg"
import DocImg from "../assets/assets_frontend/doc1.png"
import DocIcon from "../assets/assets_admin/doctor_icon.svg"
import AdminDocCard from "../components/AdminDocCard.jsx"
import ProfileImg from "../assets/assets_admin/upload_area.svg"
import { doctors } from "../assets/assets_frontend/assets.js"

const Admin = () => {

  const[active, setActive] = useState("Dash")

  return (
    <div>
      <AdminDocNav pannelName={"Admin"} pannelLink={"/Admin"}/>

      <div className='max-w-[1440px] mx-auto flex'>
    {/* Responsive NavBar for Admin pannel */}
        <div className='border-r-2 min-h-screen border-zinc-200 min-w-[200px] hidden sm:block'>
          <div className='w-full py-4'>
            <p className={`py-3 px-4 flex text-sm items-center gap-3 text-zinc-600 cursor-pointer ${active === "Dash" ? "active3" : ""}`} onClick={()=>setActive("Dash")}>
              <img src={DashImg} alt="" className='w-5'/>Dashboard
            </p>

            <p className={`py-3 px-4 flex text-sm items-center gap-3 text-zinc-600 cursor-pointer ${active === "Appoint" ? "active3" : ""}`} onClick={()=>setActive("Appoint")}>
              <img src={AppointImg} alt="" className='w-5'/>Appointments
            </p>
            
            <p className={`py-3 px-4 flex text-sm items-center gap-3 text-zinc-600 cursor-pointer ${active === "Add" ? "active3" : ""}`} onClick={()=>setActive("Add")}>
              <img src={AddDocImg} alt="" className='w-5'/>Add Doctor
            </p>

            <p className={`py-3 px-4 flex text-sm items-center gap-3 text-zinc-600 cursor-pointer ${active === "DocList" ? "active3" : ""}`} onClick={()=>setActive("DocList")}>
              <img src={DocListImg} alt="" className='w-5'/>Doctors List
            </p>
          </div>
        </div>
        
        <div className='border-r-2 h-screen border-zinc-200 min-w-[50px] sm:hidden block'>
          <div className='w-full py-4'>
            <p className={`py-4 px-3 flex text-sm items-center gap-3 text-zinc-600 cursor-pointer ${active === "Dash" ? "active3" : ""}`} onClick={()=>setActive("Dash")}>
              <img src={DashImg} alt="" className='w-5'/>
            </p>

            <p className={`py-4 px-3 flex text-sm items-center gap-3 text-zinc-600 cursor-pointer ${active === "Appoint" ? "active3" : ""}`} onClick={()=>setActive("Appoint")}>
              <img src={AppointImg} alt="" className='w-5'/>
            </p>
            
            <p className={`py-4 px-3 flex text-sm items-center gap-3 text-zinc-600 cursor-pointer ${active === "Add" ? "active3" : ""}`} onClick={()=>setActive("Add")}>
              <img src={AddDocImg} alt="" className='w-5'/>
            </p>

            <p className={`py-4 px-3 flex text-sm items-center gap-3 text-zinc-600 cursor-pointer ${active === "DocList" ? "active3" : ""}`} onClick={()=>setActive("DocList")}>
              <img src={DocListImg} alt="" className='w-5'/>
            </p>
          </div>
        </div>


    {/* Admin Pannel Conditional Rendering */}
        {
          active === "Dash" ?
          <div className='relativWidth pt-4 flex flex-col gap-4 bg-blue-50'>

          <div className='box_container flex px-4 gap-4 flex-wrap'>

            <div className="box bg-white p-4 w-[190px] rounded-md flex gap-4">
              <img src={DocIcon} className='w-[50px]' alt="" />
              <div>
                <p className='text-lg text-zinc-700 font-medium'>15</p>
                <p className='text-sm text-zinc-600'>Doctors</p>
              </div>
            </div>

            <div className="box bg-white p-4 w-[190px] rounded-md flex gap-4">
              <img src={AppointIcon} className='w-[50px]' alt="" />
              <div>
                <p className='text-lg text-zinc-700 font-medium'>5</p>
                <p className='text-sm text-zinc-600'>Appointment</p>
              </div>
            </div>

            <div className="box bg-white p-4 w-[190px] rounded-md flex gap-4">
              <img src={PatientsIcom} className='w-[50px]' alt="" />
              <div>
                <p className='text-lg text-zinc-700 font-medium'>8</p>
                <p className='text-sm text-zinc-600'>Patients</p>
              </div>
            </div>

          </div>


          <div className='mt-10 mx-4 inline-flex flex-col'>

            <div className='flex gap-4 bg-white p-3 rounded-tr-md rounded-tl-md max-w-[600px] border-b-2 border-zinc-200'>
              <img src={TableImg} className='w-[20px]' alt="" />
              <p className='text-lg font-medium'>Latest Bookings</p>
            </div>

              <div className='flex hover:bg-gray-100 bg-white justify-between p-2 max-w-[600px]'>

                <div className='flex items-center gap-2'>
                  <img src={DocImg} className='w-[40px] bg-indigo-100 rounded-full' alt="" />
                  <div>
                    <p className='text-xs '>Dr. Richard James</p>
                    <p className='text-xs text-zinc-500'>Booking on 25 Sep 2024</p>
                  </div>
                </div>

                <div className='flex items-center gap-1'>
                  <img src={CrossImg} className='w-[35px]' alt="" />
                </div>

              </div> 

              <div className='flex hover:bg-gray-100 bg-white justify-between p-2 max-w-[600px] rounded-br-md rounded-bl-md'>

                <div className='flex items-center gap-2'>
                  <img src={DocImg} className='w-[40px] bg-indigo-100 rounded-full' alt="" />
                  <div>
                    <p className='text-xs '>Dr. Richard James</p>
                    <p className='text-xs text-zinc-500'>Booking on 25 Sep 2024</p>
                  </div>
                </div>

                <div className='flex items-center gap-1'>
                  <img src={CrossImg} className='w-[35px]' alt="" />
                </div>

              </div> 
              
          </div>
          

          </div> 
            :
          active === "Appoint" ?
          <div className='relativWidth pt-4 flex flex-col gap-4 bg-blue-50'>

            <p className='text-lg font-medium pl-4'>All Appointments</p>

            <div className="table_container overflow-x-auto p-4">

              <div className="table_row gap-2 bg-white inline-flex p-2 justify-start rounded-tr-md rounded-tl-md border-b-2 border-zinc-300">
                <p className='w-[30px]'>#</p>
                <p className='w-[140px]'>Patient</p>
                <p className='w-[100px]'>Payment</p>
                <p className='w-[60px]'>Age</p>
                <p className='w-[160px]'>Date & Time</p>
                <p className='w-[140px]'>Doctor</p>
                <p className='w-[70px]'>Fees</p>
                <p className='w-[100px]'>Action</p>
              </div>

              <div className="table_row bg-white inline-flex p-2 justify-start items-center gap-2 hover:bg-zinc-100">
                <p className='text-sm w-[30px]'>0</p>
                <p className='w-[140px] flex gap-2 items-center text-sm'><img src={PatientImg} className='w-[30px]' alt="" />Jagdish Sahu</p>
                <div className='w-[100px] flex justify-start text-sm'>
                  <p className='border-2 border-zinc-300 px-2 rounded-full'>Cash</p>
                </div>
                <p className='w-[60px] text-sm'>22</p>
                <p className='w-[160px] text-sm'>5 Oct 2025, 12:00 PM</p>
                <p className='w-[140px] text-sm'>Dr. Richard James</p>
                <p className='w-[70px] text-sm'>$50</p>
                <p className='w-[100px] flex gap-2'><img src={CrossImg} className='w-[35px]' alt="" /></p>
              </div>

              <div className="table_row bg-white inline-flex p-2 justify-start rounded-br-md rounded-bl-md items-center gap-2 hover:bg-zinc-100">
                <p className='text-sm w-[30px]'>0</p>
                <p className='w-[140px] flex gap-2 items-center text-sm'><img src={PatientImg} className='w-[30px]' alt="" />Jagdish Sahu</p>
                <div className='w-[100px] flex justify-start text-sm'>
                  <p className='border-2 border-zinc-300 px-2 rounded-full'>Cash</p>
                </div>
                <p className='w-[60px] text-sm'>22</p>
                <p className='w-[160px] text-sm'>5 Oct 2025, 12:00 PM</p>
                <p className='w-[140px] text-sm'>Dr. Richard James</p>
                <p className='w-[70px] text-sm'>$50</p>
                <p className='w-[100px] flex gap-2'><img src={CrossImg} className='w-[35px]' alt="" /></p>
              </div>

            </div>

          </div>  
            :
          active === "Add" ?
          <div className='relativWidth pt-4 flex flex-col gap-4 bg-blue-50'>

            <div className='px-4 text-lg font-medium'>
              Add Doctor
            </div>

            <div className='p-4 flex'>

              <div className='bg-white p-4 rounded-md w-full sm:w-[535px] lg:w-[635px]'>

                <div className="profileImg flex items-center gap-2">
                  <img src={ProfileImg} className='w-[50px]' alt="" />
                  <div className='flex flex-col'>
                    <p className='text-sm text-zinc-500'>Upload Doctor</p>
                    <p className='text-sm text-zinc-500'>Image</p>
                  </div>
                </div>

                <form action="" className='md:w-[500px] lg:w-[600px]'>
                    <div className='flex flex-col gap-1 mt-8'>
                      <label htmlFor="Name" className='text-sm text-zinc-700'>
                        Doctor's Name
                      </label>
                      <input placeholder='Name' type="text" id='Name' className='px-2 py-1 border-2 border-zinc-200 rounded-sm text-sm text-zinc-700'/>
                    </div>

                    <div className='flex flex-col gap-1 mt-4'>
                      <label htmlFor="Speciality" className='text-sm text-zinc-700'>
                        Speciality
                      </label>
                      <select name="Speciality" id="Speciality" className='px-2 py-1.5 border-2 border-zinc-200 rounded-sm text-sm text-zinc-700'>
                        <option value="General physician">General physician</option>
                        <option value="Gynecologist">Gynecologist</option>
                        <option value="Pediatricians">Pediatricians</option>
                        <option value="Neurologist">Neurologist</option>
                        <option value="Gastroenterologist">Gastroenterologist</option>
                      </select>
                    </div>

                    <div className='flex flex-col gap-1 mt-4'>
                      <label htmlFor="Degree" className='text-sm text-zinc-700'>
                        Degree
                      </label>
                      <input placeholder='MBBS' type="text" id='Degree' className='px-2 py-1 border-2 border-zinc-200 rounded-sm text-sm text-zinc-700'/>
                    </div>

                    <div className='flex flex-col gap-1 mt-4'>
                      <label htmlFor="Email" className='text-sm text-zinc-700'>
                        Doctor's Email
                      </label>
                      <input placeholder='example@gmail.com' type="email" id='Email' className='px-2 py-1 border-2 border-zinc-200 rounded-sm text-sm text-zinc-700'/>
                    </div>

                    <div className='flex flex-col gap-1 mt-4'>
                      <label htmlFor="password" className='text-sm text-zinc-700'>
                        Set Password
                      </label>
                      <input placeholder='Password' type="password" id='password' className='px-2 py-1 border-2 border-zinc-200 rounded-sm text-sm text-zinc-700'/>
                    </div>

                    <div className='flex flex-col gap-1 mt-4'>
                      <label htmlFor="experience" className='text-sm text-zinc-700'>
                        Speciality
                      </label>
                      <select name="experience" id="experience" className='px-2 py-1.5 border-2 border-zinc-200 rounded-sm text-sm text-zinc-700'>
                        <option value="1">1 Year</option>
                        <option value="2">2 Years</option>
                        <option value="3">3 Years</option>
                        <option value="4">4 Years</option>
                        <option value="5">5+ Years</option>
                      </select>
                    </div>

                    <div className='flex flex-col gap-1 mt-4'>
                      <label htmlFor="fee" className='text-sm text-zinc-700'>
                        Doctors's Fee
                      </label>
                      <input placeholder='Fee' type="text" id='fee' className='px-2 py-1 border-2 border-zinc-200 rounded-sm text-sm text-zinc-700'/>
                    </div>

                    <div className='flex flex-col gap-1 mt-4'>
                      <label htmlFor="about" className='text-sm text-zinc-700'>
                        About Doctor
                      </label>
                      <textarea name="" id="about" className='px-2 py-1 border-2 border-zinc-200 rounded-sm h-[100px] text-sm text-zinc-700' placeholder='write about doctor'></textarea>
                    </div>

                    <button className='text-white bg-[#2F80ED] px-8 py-2 rounded-full text-base mt-4'>Add Doctor</button>
                  </form>
              </div>

            </div>

          </div> 
            :
          <div className='relativWidth p-4 flex flex-wrap justify-center gap-4 bg-blue-50'>
            {
              doctors.map((items, index)=>(
                <AdminDocCard docImg={items.image} docSpecility={items.speciality} key={index} docName={items.name}/>
              ))
            }
          </div>
        }

      </div>
    </div>
  )
}

export default Admin
