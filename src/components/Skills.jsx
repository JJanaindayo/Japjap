import React from 'react'
import CustomButton from './Button'

const Skills = () => {
  return (
    <section  className='bg-[#F2F2F2] px-15 py-19 flex' id='Skills'>
        <div className='mr-35'>
            <p className='font-body mb-2.5 font-semibold'>Skills</p>
            <h1 className='text-[2.5rem] font-medium mb-8 font-heading'>Transforming code into <br /> powerful digital solutions</h1>
            <a href="https://www.youtube.com/">
              {/* <CustomButton
             title='Download CV'
             styles={'rounded-xl border-1 border-[#B2B2B2] w-[8rem] mr-2'}
            /> */}
            </a>
            <a href="https://github.com/Japhethnothere">
               <CustomButton
             title='GitHub'
            />
            </a>
        </div>

        <div className='flex flex-col  mt-10 mr-9'>
            <img src="src\assets\react.png" alt="react logo" className='w-8 mb-10'/>
            <div className='border border-black h-14 w-0 ml-3.5'></div>
            <img src="src\assets\next.png" alt="next.js logo" className='w-8 my-12'/>
            <div className='border border-black h-14 w-0 ml-3.5'></div>
            <img src="src\assets\tailwind.png" alt="tailwind logo" className='w-8 my-15'/>
            <div className='border border-black h-14 w-0 ml-3.5'></div>
            <img src="src\assets\typescript.png" alt="typescript logo" className='w-8 my-6'/>
        </div>

        <div className='w-120 mt-10'>
            <div className='mb-20'>
                <h2 className='font-heading text-xl mb-4'>React</h2>
                <p className='font-body mb-12'>Building dynamic, responsive interfaces that breathe life into complex web applications with clean, modular architecture.</p>
            </div>
             <div className='mb-20'>
                <h2 className='font-heading text-xl mb-4'>Next.JS</h2>
                <p className='font-body mb-12'>Developing resilient server-side infrastructure designed to expand dynamically and integrate smoothly with contemporary digital ecosystems.</p>
            </div>
             <div className='mb-20'>
                <h2 className='font-heading text-xl mb-4'>Tailwind</h2>
                <p className='font-body mb-12'>Designing pixel-perfect interfaces with utility-first CSS that adapts quickly and maintains design consistency.</p>
            </div>
             <div className='mb-20'>
                <h2 className='font-heading text-xl mb-4'>Typescript</h2>
                <p className='font-body mb-12'>Implementing strong type systems that reduce errors and enhance code reliability during development.</p>
            </div>
        </div>
    </section>
  )
}

export default Skills