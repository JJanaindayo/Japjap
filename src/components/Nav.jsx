import { Link } from "react-scroll"

const Nav = () => {
  


  return (
    <section className='sticky top-0 bg-white flex justify-between py-5 px-13'>
        <h1 className='font-cursive font-bold text-xl border border-gray-400 rounded-4xl px-3 py-2'>JJ</h1>
        <div className="place-self-center">
            <Link activeClass="active" smooth={true} to="Home" spy={true} offset={-70} duration={500} className="mx-4.5">Home</Link>
            <Link activeClass="active" smooth={true} to="Skills" spy={true} offset={-70} duration={500} className="mx-4.5">Skills</Link>
            <Link activeClass="active" smooth={true} to="Projects" spy={true} offset={-70} duration={500} className="mx-4.5">Projects</Link>
            <Link activeClass="active" smooth={true} to="Contact" spy={true} offset={-70} duration={500} className="mx-4.5">Contacts</Link>
        </div>
    </section>
  )
}

export default Nav