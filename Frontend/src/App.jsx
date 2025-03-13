import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import AllDoc from './pages/AllDoc'
import About from "./pages/About"
import Contact from "./pages/Contact"
import Auth from './pages/Auth'
import { DoctorProvider } from "./context/DoctorContext";

const App = () => {
  return (
    <DoctorProvider>
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/AllDoc" element={<AllDoc />} />
        <Route path= "/About" element={<About />} />
        <Route path= "/Contact" element={<Contact />} />
        <Route path= "/Auth" element={<Auth />} />
      </Routes>
    </DoctorProvider>
  )
}

export default App
