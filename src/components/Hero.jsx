import { Link } from 'react-scroll'
import CustomButton from './Button'

const Hero = () => {
  return (
    <section 
      id="Home" 
      className="bg-[#D9E1F9] flex flex-col md:flex-row items-center md:items-start px-6 md:px-12 lg:px-20 py-10 md:py-20"
    >
      {/* Text Section */}
      <div className="flex flex-col justify-center md:mr-12 max-w-xl text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 font-heading">
          Crafting digital experiences with code and creativity
        </h1>
        <p className="mb-5 font-body text-sm sm:text-base md:text-lg">
          I'm Japheth Jorquia, a front-end web developer transforming complex ideas into elegant, responsive interfaces. My work bridges innovative design with powerful technical solutions.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
          <Link 
            activeClass="active"
            smooth={true} to="Skills" 
            spy={true} offset={-70} 
            duration={500} 
            className="px-4 py-2 font-body hover:cursor-pointer bg-[#4169E1] text-white rounded-xl w-full sm:w-[6rem] hover:bg-[#3454B4] text-center"
          >
            Explore
          </Link>

          <Link 
            activeClass="active" 
            smooth={true} to="Contact" 
            spy={true} 
            offset={-70} 
            duration={500} 
            className="px-4 py-2 font-body hover:cursor-pointer text-black rounded-xl border border-gray-400 w-full sm:w-[6rem] bg-[#D9E1F9] text-center"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-8 md:mt-0">
        <img 
          src="/assets/Heroimg.jpg" 
          alt="Hero" 
          className="w-full sm:w-80 md:w-[22rem] rounded-2xl object-cover"
        />
      </div>
    </section>
  )
}

export default Hero
