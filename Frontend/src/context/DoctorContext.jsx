import { createContext, useEffect, useState } from "react";
import { doctors } from "../assets/assets_frontend/assets.js"; 

// Create Context
// eslint-disable-next-line react-refresh/only-export-components
export const DoctorContext = createContext();

// Provider Component
export const DoctorProvider = ({ children }) => {
    const [specialist, setSpecialist] = useState("All");
    const [filteredDoc, setFilteredDoc] = useState(doctors);

    // Function to filter doctors
    useEffect(()=>{
        if (specialist === "All") {
            setFilteredDoc(doctors);
        } else {
            setFilteredDoc(doctors.filter(doc => doc.speciality === specialist));
        }
    },[specialist, setSpecialist 

    ])

    return (
        <DoctorContext.Provider value={{ specialist, filteredDoc, setSpecialist }}>
            {children}
        </DoctorContext.Provider>
    );
};
