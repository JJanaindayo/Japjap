import { useState } from "react"
import { Link } from "react-scroll"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-6 sm:px-10 lg:px-20 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="font-cursive font-bold text-xl border border-gray-400 rounded-full px-3 py-2">
        JJ
      </h1>

      {/* Desktop Links */}
      <div className="hidden sm:flex place-self-center">
        <Link smooth={true} to="Home" spy={true} offset={-70} duration={500} className="mx-4 font-heading font-medium hover:text-[#4169E1] cursor-pointer">Home</Link>
        <Link smooth={true} to="Skills" spy={true} offset={-70} duration={500} className="mx-4 font-heading font-medium hover:text-[#4169E1] cursor-pointer">Skills</Link>
        <Link smooth={true} to="Projects" spy={true} offset={-70} duration={500} className="mx-4 font-heading font-medium hover:text-[#4169E1] cursor-pointer">Projects</Link>
        <Link smooth={true} to="Contact" spy={true} offset={-70} duration={500} className="mx-4 font-heading font-medium hover:text-[#4169E1] cursor-pointer">Contact</Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="sm:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="p-2 border rounded-md focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-6 sm:hidden">
          <Link smooth={true} to="Home" spy={true} offset={-70} duration={500} onClick={() => setIsOpen(false)} className="py-2 font-heading font-medium hover:text-[#4169E1] cursor-pointer">Home</Link>
          <Link smooth={true} to="Skills" spy={true} offset={-70} duration={500} onClick={() => setIsOpen(false)} className="py-2 font-heading font-medium hover:text-[#4169E1] cursor-pointer">Skills</Link>
          <Link smooth={true} to="Projects" spy={true} offset={-70} duration={500} onClick={() => setIsOpen(false)} className="py-2 font-heading font-medium hover:text-[#4169E1] cursor-pointer">Projects</Link>
          <Link smooth={true} to="Contact" spy={true} offset={-70} duration={500} onClick={() => setIsOpen(false)} className="py-2 font-heading font-medium hover:text-[#4169E1] cursor-pointer">Contact</Link>
        </div>
      )}
    </nav>
  )
}

export default Nav
