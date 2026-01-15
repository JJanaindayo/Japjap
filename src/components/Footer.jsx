import React from 'react'
import { Link } from "react-scroll"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white px-6 sm:px-10 lg:px-20 py-8 sm:py-12">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-6">
        {/* Logo */}
        <h1 className="font-cursive font-bold text-xl border border-gray-400 rounded-full px-3 py-2">
          JJ
        </h1>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 font-heading font-bold text-sm sm:text-base">
          <Link smooth={true} to="Home" spy={true} offset={-70} duration={500} className="hover:text-[#4169E1] cursor-pointer">Home</Link>
          <Link smooth={true} to="Skills" spy={true} offset={-70} duration={500} className="hover:text-[#4169E1] cursor-pointer">Skills</Link>
          <Link smooth={true} to="Projects" spy={true} offset={-70} duration={500} className="hover:text-[#4169E1] cursor-pointer">Projects</Link>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row gap-4">
          <img src="/assets/facebook-icon-black.png" alt="facebook icon" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full cursor-pointer"/>
          <img src="/assets/ig-icon-black.png" alt="instagram icon" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full cursor-pointer"/>
          <img src="/assets/linkedin-icon-black.png" alt="linkedin icon" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full cursor-pointer"/>
        </div>
      </div>

      {/* Divider */}
      <div className="border border-gray-300 mb-6"></div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 text-sm sm:text-base">
        <p>&copy; {currentYear} Japheth Jorquia. All work and words are mine.</p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <p className="cursor-pointer hover:text-[#4169E1]">Privacy policy</p>
          <p className="cursor-pointer hover:text-[#4169E1]">Terms of service</p>
          <p className="cursor-pointer hover:text-[#4169E1]">Cookie preferences</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
