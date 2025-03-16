import React, { useState } from 'react'
import AdminDocNav from '../components/AdminDocNav'
import DashImg from "../assets/assets_admin/home_icon.svg"
import AppointImg from "../assets/assets_admin/appointment_icon.svg"
import ProfileImg from "../assets/assets_admin/people_icon.svg"
import MoneyImg from "../assets/assets_admin/earning_icon.svg"
import AppointIcon from "../assets/assets_admin/appointments_icon.svg"
import PatientsIcom from "../assets/assets_admin/patients_icon.svg"
import TableImg from "../assets/assets_admin/list_icon.svg"
import PatientImg from "../assets/assets_admin/upload_area.svg"
import ClickImg from "../assets/assets_admin/tick_icon.svg"
import CrossImg from "../assets/assets_admin/cancel_icon.svg"
import DocImg from "../assets/assets_frontend/doc1.png"

const Doctor = () => {

  const[active, setActive] = useState("Dash")

  return (
    <div>
      <AdminDocNav pannelName={"Doctor"} pannelLink={"/Doctor"}/>

      <div className='max-w-[1440px] mx-auto flex'>
  {/* Responsive NavBar for Doctors pannel */}
        <div className='border-r-2 h-screen border-zinc-200 min-w-[200px] hidden sm:block'>
          <div className='w-full py-4'>
            <p className={`py-3 px-4 flex text-sm items-center gap-3 text-zinc-600 cursor-pointer ${active === "Dash" ? "active3" : ""}`} onClick={()=>setActive("Dash")}>
              <img src={DashImg} alt="" className='w-5'/>Dashboard
            </p>

            <p className={`py-3 px-4 flex text-sm items-center gap-3 text-zinc-600 cursor-pointer ${active === "Appoint" ? "active3" : ""}`} onClick={()=>setActive("Appoint")}>
              <img src={AppointImg} alt="" className='w-5'/>Appointments
            </p>
            
            <p className={`py-3 px-4 flex text-sm items-center gap-3 text-zinc-600 cursor-pointer ${active === "Profile" ? "active3" : ""}`} onClick={()=>setActive("Profile")}>
              <img src={ProfileImg} alt="" className='w-5'/>Profile
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
            
            <p className={`py-4 px-3 flex text-sm items-center gap-3 text-zinc-600 cursor-pointer ${active === "Profile" ? "active3" : ""}`} onClick={()=>setActive("Profile")}>
              <img src={ProfileImg} alt="" className='w-5'/>
            </p>

          </div>
        </div>


  {/* Doctor's Pannel Conditional Rendering */}
      {
        active === "Dash" ?
        <div className='relativWidth pt-4 flex flex-col gap-4 bg-blue-50'>

          <div className='box_container flex px-4 gap-4 flex-wrap'>

            <div className="box bg-white p-4 w-[190px] rounded-md flex gap-4">
              <img src={MoneyImg} className='w-[50px]' alt="" />
              <div>
                <p className='text-lg text-zinc-700 font-medium'>$80</p>
                <p className='text-sm text-zinc-600'>Earning</p>
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
                  <img src={PatientImg} className='w-[40px]' alt="" />
                  <div>
                    <p className='text-xs '>Jagdish Sahu</p>
                    <p className='text-xs text-zinc-500'>Booking on 25 Sep 2024</p>
                  </div>
                </div>

                <div className='flex items-center gap-1'>
                  <img src={ClickImg} className='w-[35px]' alt="" />
                  <img src={CrossImg} className='w-[35px]' alt="" />
                </div>

              </div> 
              
              <div className='flex hover:bg-gray-100 bg-white justify-between p-2 max-w-[600px] rounded-br-md rounded-bl-md'>

                <div className='flex items-center gap-2'>
                  <img src={PatientImg} className='w-[40px]' alt="" />
                  <div>
                    <p className='text-xs '>Jagdish Sahu</p>
                    <p className='text-xs text-zinc-500'>Booking on 25 Sep 2024</p>
                  </div>
                </div>

                <div className='flex items-center gap-1'>
                  <img src={ClickImg} className='w-[35px]' alt="" />
                  <img src={CrossImg} className='w-[35px]' alt="" />
                </div>

              </div> 
              
          </div>
          

        </div>:
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
              <p className='w-[70px] text-sm'>$50</p>
              <p className='w-[100px] flex gap-2'><img src={ClickImg} className='w-[35px]' alt="" /><img src={CrossImg} className='w-[35px]' alt="" /></p>
            </div>

            <div className="table_row bg-white inline-flex p-2 justify-start rounded-br-md rounded-bl-md items-center gap-2 hover:bg-zinc-100">
              <p className='text-sm w-[30px]'>0</p>
              <p className='w-[140px] flex gap-2 items-center text-sm'><img src={PatientImg} className='w-[30px]' alt="" />Jagdish Sahu</p>
              <div className='w-[100px] flex justify-start text-sm'>
                <p className='border-2 border-zinc-300 px-2 rounded-full'>Cash</p>
              </div>
              <p className='w-[60px] text-sm'>22</p>
              <p className='w-[160px] text-sm'>5 Oct 2025, 12:00 PM</p>
              <p className='w-[70px] text-sm'>$50</p>
              <p className='w-[100px] flex gap-2'><img src={ClickImg} className='w-[35px]' alt="" /><img src={CrossImg} className='w-[35px]' alt="" /></p>
            </div>

          </div>

        </div> 
          :
        <div className='relativWidth pt-4 flex flex-col gap-4 bg-blue-50'>

          <p className='text-lg font-medium pl-4'>Profile</p>

          <div className='bg-[#2F80ED] w-[250px] mx-4 rounded-md'>
            <img src={DocImg} alt="" />
          </div>

          <div className='bg-white max-w-[500px] p-4 mx-4 rounded-md'>
            <p className='text-xl'>Dr. Richard James</p>
            <p className='text-xs text-zinc-500 flex gap-4 items-center'>MBBS - General physician <p className='border-2 border-zinc-200 rounded-full px-1.5'>4 Years</p></p>
            <p className='text-base mt-4'>About:</p>
            <p className='text-sm text-zinc-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellendus atque nisi accusamus qui unde voluptates earum porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus harum explicabo nam expedita quos amet deleniti quis.</p>
            <p className='mt-4 text-base'>Appointment fee: $50</p>
            <button className='mt-4 text-sm bg-[#2F80ED] text-white px-6 py-1.5 rounded-md'>Edit</button>
          </div>

        </div>
      }

      </div>

    </div>
  )
}

export default Doctor
