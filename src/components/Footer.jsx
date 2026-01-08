import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='p-15'>
        <div className='flex place-content-between mb-18'>
            <div><h1 className='font-cursive font-bold text-xl border border-gray-400 rounded-4xl px-3 py-2'>JJ</h1></div>
            <div>
              <a href="" className='mx-4.5 font-heading font-bold'>Home</a>
              <a href="" className='mx-4.5 font-heading font-bold'>Skills</a>
              <a href="" className='mx-4.5 font-heading font-bold'>Projects</a>
            </div>
            <div className='flex flex-row '>
                <img src="src\assets\facebook-icon-black.png" alt="facebook icon" className='w-4 h-4 rounded-4xl mr-2'/>
                <img src="src\assets\ig-icon-black.png" alt="instagram icon" className='w-4 h-4 rounded-4xl mr-2'/>
                <img src="src\assets\linkedin-icon-black.png" alt="linkedin icon" className='w-4 h-4 rounded-4xl mr-2'/>
            </div>
        </div>
        <div className='border border-gray-300 mb-8'></div>
        <div className='flex place-content-between mx-35'>
            <p>&copy; {currentYear} Japheth Jorquia. All work and words are mine.</p>
            <p>Privacy policy</p>
            <p>Terms of service</p>
            <p>Cookie preferences</p>
        </div>
    </footer>
  )
}

export default Footer