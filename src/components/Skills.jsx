import React from 'react'
import CustomButton from './Button'

const Skills = () => {
  return (
    <section 
      id="Skills" 
      className="bg-[#F2F2F2] flex flex-col lg:flex-row px-6 sm:px-10 lg:px-20 py-10 sm:py-16 lg:py-20"
    >
      {/* Left Text Section */}
      <div className="lg:mr-20 max-w-xl text-center lg:text-left">
        <p className="font-body mb-2.5 font-semibold text-sm sm:text-base">Skills</p>
        <h1 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-medium mb-8 font-heading">
          Transforming code into <br /> powerful digital solutions
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          {/* Example button (commented out in your code) */}
          {/* <CustomButton
            title="Download CV"
            styles="rounded-xl border border-[#B2B2B2] w-[8rem]"
          /> */}
          <a href="https://github.com/Japhethnothere">
            <CustomButton title="GitHub" />
          </a>
        </div>
      </div>

      {/* Middle Icons Section */}
      <div className="flex flex-row lg:flex-col items-center justify-center mt-10 lg:mt-0 lg:mr-12 gap-6">
        <img src="/assets/react.png" alt="react logo" className="w-10 sm:w-12" />
        <div className="hidden lg:block border border-black h-14 w-0"></div>
        <img src="/assets/next.png" alt="next.js logo" className="w-10 sm:w-12" />
        <div className="hidden lg:block border border-black h-14 w-0"></div>
        <img src="/assets/tailwind.png" alt="tailwind logo" className="w-10 sm:w-12" />
        <div className="hidden lg:block border border-black h-14 w-0"></div>
        <img src="/assets/typescript.png" alt="typescript logo" className="w-10 sm:w-12" />
      </div>

      {/* Right Details Section */}
      <div className="mt-10 lg:mt-0 lg:w-[30rem]">
        <div className="mb-12">
          <h2 className="font-heading text-lg sm:text-xl mb-4">React</h2>
          <p className="font-body text-sm sm:text-base mb-8">
            Building dynamic, responsive interfaces that breathe life into complex web applications with clean, modular architecture.
          </p>
        </div>
        <div className="mb-12">
          <h2 className="font-heading text-lg sm:text-xl mb-4">Next.JS</h2>
          <p className="font-body text-sm sm:text-base mb-8">
            Developing resilient server-side infrastructure designed to expand dynamically and integrate smoothly with contemporary digital ecosystems.
          </p>
        </div>
        <div className="mb-12">
          <h2 className="font-heading text-lg sm:text-xl mb-4">Tailwind</h2>
          <p className="font-body text-sm sm:text-base mb-8">
            Designing pixel-perfect interfaces with utility-first CSS that adapts quickly and maintains design consistency.
          </p>
        </div>
        <div className="mb-12">
          <h2 className="font-heading text-lg sm:text-xl mb-4">Typescript</h2>
          <p className="font-body text-sm sm:text-base mb-8">
            Implementing strong type systems that reduce errors and enhance code reliability during development.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
