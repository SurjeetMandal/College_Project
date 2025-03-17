import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import AllDoc from './pages/AllDoc'
import About from "./pages/About"
import Contact from "./pages/Contact"
import Auth from './pages/Auth'
import { DoctorProvider } from "./context/DoctorContext";
import Admin from './pages/Admin'
import Doctor from './pages/Doctor'
import AdminDocAuth from './pages/AdminDocAuth'

const App = () => {
  return (
    <DoctorProvider>
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/AllDoc" element={<AllDoc />} />
        <Route path= "/About" element={<About />} />
        <Route path= "/Contact" element={<Contact />} />
        <Route path= "/Auth" element={<Auth />} />
        <Route path= "/Admin" element={<Admin />} />
        <Route path= "/Doctor" element={<Doctor />} />
        <Route path= "/AdminDocAuth" element={<AdminDocAuth />} />
      </Routes>
    </DoctorProvider>
  )
}

export default App;
