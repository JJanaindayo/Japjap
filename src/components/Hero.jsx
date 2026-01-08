import { Link } from 'react-scroll'
import CustomButton from './Button'

const Hero = () => {
  return (
    <section className='bg-[#D9E1F9] flex flex-row px-15 py-15' id='Home'>
        <div className='flex flex-col justify-center mr-22'>
            <h1 className='text-5xl font-medium mb-6 font-heading'>Crafting digital experiences with code and creativity</h1>
            <p className='mb-5 font-body'>I'm Japheth Jorquia, a front-end web developer transforming complex ideas into elegant, responsive interfaces. My work bridges innovative design with powerful technical solutions.</p>
            <div className='flex flex-row'>
              <Link 
               activeClass="active"
               smooth={true} to="Skills" 
               spy={true} offset={-70} 
               duration={500} 
               className="p-1.25 pl-3 font-body hover:cursor-pointer bg-[#4169E1] text-white rounded-xl w-[5rem] mr-2 hover:bg-[#3454B4]">Explore</Link>

              <Link 
               activeClass="active" 
               smooth={true} to="Contact" 
               spy={true} 
               offset={-70} 
               duration={500} 
               className="p-1.25 pl-2 font-body hover:cursor-pointer text-black rounded-xl border-1 border-gray w-[5rem] bg-[#D9E1F9]">Contact</Link>
            </div>
        </div>
        <div>
            <img src="src\assets\Heroimg.jpg" alt="" className='w-284 rounded-2xl'/>
        </div>
    </section>
  )
}

export default Hero