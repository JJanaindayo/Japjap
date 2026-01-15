import { Link } from "react-scroll"
import CustomButton from "./Button"

const CalltoAction = () => {
  return (
    <section className="bg-[#D9E1F9] px-6 sm:px-10 lg:px-20 py-10 sm:py-16 lg:py-20">
      <div className="text-center lg:text-left max-w-2xl mx-auto">
        <h1 className="font-heading font-medium text-2xl sm:text-3xl lg:text-[2.5rem] mb-3">
          Let's build something remarkable
        </h1>
        <p className="font-body text-sm sm:text-base max-w-xl sm:max-w-2xl mb-6 mx-auto lg:mx-0">
          Transforming ideas into powerful digital experiences that drive innovation and performance
        </p>

        <Link 
          activeClass="active" 
          smooth={true} to="Contact" 
          spy={true} 
          offset={-70} 
          duration={500} 
          className="px-4 py-2 font-body hover:cursor-pointer bg-[#4169E1] text-white rounded-xl w-full sm:w-auto hover:bg-[#3454B4] inline-block"
        >
          Contact me
        </Link>
      </div>
    </section>
  )
}

export default CalltoAction
