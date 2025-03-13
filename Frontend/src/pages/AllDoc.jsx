import React, { useContext } from 'react'
import { DoctorContext } from '../context/DoctorContext';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Card from "../components/Card"

const AllDoc = () => {

  const { specialist, filteredDoc, setSpecialist } = useContext(DoctorContext);

  return (
    <div>
        <NavBar />
        
          <div className='max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20'>
            <div className='mt-4 md:mt-6 flex flex-col justify-center'>

              <p className='text-zinc-600 text:base md:text-sm'>Browse through the doctors specialist.</p>

              <div className='flex gap-4 flex-col md:flex-row'>

                <div className="filter md:w-[220px] flex flex-col items-start mt-4 gap-4 text-base md:text-sm text-zinc-600">
                  <button className={`px-6 text-start py-1 border-[2px] rounded-md w-full md:min-w-[220px] ${specialist === "General physician" ? "active2" : ""}`} onClick={()=>specialist === "General physician" ? setSpecialist("All") : setSpecialist("General physician")}>General physician</button>
                  <button className={`px-6 text-start py-1 border-[2px] rounded-md w-full ${specialist === "Gynecologist" ? "active2" : ""}`} onClick={()=>specialist === "Gynecologist" ? setSpecialist("All") : setSpecialist("Gynecologist")}>Gynecologist</button>
                  <button className={`px-6 text-start py-1 border-[2px] rounded-md w-full ${specialist === "Dermatologist" ? "active2" : ""}`} onClick={()=>specialist === "Dermatologist" ? setSpecialist("All") :setSpecialist("Dermatologist")}>Dermatologist</button>
                  <button className={`px-6 text-start py-1 border-[2px] rounded-md w-full ${specialist === "Pediatricians" ? "active2" : ""}`} onClick={()=>specialist === "Pediatricians" ? setSpecialist("All") :setSpecialist("Pediatricians")}>Pediatricians</button>
                  <button className={`px-6 text-start py-1 border-[2px] rounded-md w-full ${specialist === "Neurologist" ? "active2" : ""}`} onClick={()=>specialist === "Neurologist" ? setSpecialist("All") :setSpecialist("Neurologist")}>Neurologist</button>
                  <button className={`px-6 text-start py-1 border-[2px] rounded-md w-full ${specialist === "Gastroenterologist" ? "active2" : ""}`} onClick={()=>specialist === "Gastroenterologist" ? setSpecialist("All") :setSpecialist("Gastroenterologist")}>Gastroenterologist</button>
                </div>

                <div className="doc flex flex-wrap gap-4 mt-4 justify-center md:justify-end">
                  {
                    filteredDoc.map((items, index) => (
                      <div key={index}>
                        <Card docName={items.name} docImg={items.image} docSpecility={items.speciality}/>
                      </div>
                    ))
                  }
                </div>

              </div>

            </div>
          </div>

        <Footer />
    </div>
  )
}

export default AllDoc
