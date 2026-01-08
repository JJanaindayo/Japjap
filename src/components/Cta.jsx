import { Link } from "react-scroll"
import CustomButton from "./Button"

const CalltoAction = () => {
  return (
    <section className="px-15 py-22 bg-[#D9E1F9]">
        <div>
            <h1 className="font-heading font-medium text-[2.5rem] mb-3">Let's build something remarkable</h1>
            <p className="font-body w-152 mb-6">Transforming ideas into powerful digital experiences that drive innovation and performance</p>

            <Link 
             activeClass="active" 
             smooth={true} to="Contact" 
             spy={true} 
             offset={-70} 
             duration={500} 
             className="p-1.25 pl-2 font-body hover:cursor-pointer bg-[#4169E1] text-white rounded-xl w-[6.5rem] mr-2 hover:bg-[#3454B4]">Contact me</Link>
        </div>
    </section>
  )
}

export default CalltoAction