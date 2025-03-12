import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import AllDoc from './pages/AllDoc'
import About from "./pages/About"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <Routes>
      <Route path= "/" element={<Home />} />
      <Route path= "/AllDoc" element={<AllDoc />} />
      <Route path= "/About" element={<About />} />
      <Route path= "/Contact" element={<Contact />} />
    </Routes>
  )
}

export default App
