import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ContactImg from "../assets/assets_frontend/contact_image.png"

const Contact = () => {
  return (
    <div>
      <NavBar />

      <section className="flex flex-col items-center justify-center py-16 px-4">
        
        <h2 className="text-4xl font-medium text-zinc-500 mb-8 text-center">
          Contact <span className='text-zinc-800'>Us</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start max-w-4xl w-full gap-8">
          
          {/* Left: Image */}
          <div className="w-full md:w-[40%]">
            <img
              src={ContactImg}
              alt="Contact Us"
              className="w-full h-auto"
            />
          </div>

          {/* Right: Contact Info */}
          <div className="w-full md:w-[60%]">
            <p className="text-zinc-600 text-sm leading-relaxed">
              Have questions or need assistance? Feel free to reach out to us. We are here to help! Whether it's inquiries about our services, feedback, or technical support, we’d love to hear from you.<br/><br/>
              
              <span className='font-semibold text-zinc-900'>Get in Touch</span><br/><br/>

              📍 <span className="font-medium text-zinc-800">Our Address:</span> 1234 Health Street, Wellness City, HC 56789<br/><br/>
              📧 <span className="font-medium text-zinc-800">Email:</span> support@prescripto.com<br/><br/>
              📞 <span className="font-medium text-zinc-800">Phone:</span> +1 234 567 890<br/><br/>
              🕒 <span className="font-medium text-zinc-800">Working Hours:</span> Mon-Fri: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact

