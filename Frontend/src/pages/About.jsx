import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import AboutImg from "../assets/assets_frontend/about_image.png"

const About = () => {
  return (
    <div>
      <NavBar />

        <section className="flex flex-col items-center justify-center py-16 px-4">

          <h2 className="text-4xl font-medium text-zinc-500 mb-8 text-center">
            About <span className='text-zinc-800'>Us</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center md:items-start max-w-4xl w-full gap-8">
            {/* Left: Image */}
            <div className="w-full md:w-[40%]">
              <img
                src={AboutImg}
                alt="About Us"
                className="w-full h-auto"
              />
            </div>
            
            {/* Right: About Text */}
            <div className="w-full md:w-[60%]">
              <p className="text-zinc-600 text-sm leading-relaxed">
                Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.<br/><br/>
                Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.<br/><br/>
                <span className='font-semibold text-zinc-900'>Our Vision</span><br/><br/>
                Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
              </p>
            </div>
          </div>
        </section>

      <Footer />
    </div>
  )
}

export default About
