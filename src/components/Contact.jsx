import React from 'react'

const Contact = () => {
  return (
    <section className='bg-[#F2F2F2] p-22' id='Contact'>
        <div className='flex flex-col items-center'>
            <h2 className='font-heading font-bold mb-3'>Connect</h2>
            <h1 className='font-heading font-medium text-[2.75rem] mb-3'>Start a conversation</h1>
            <p className='font-body text-lg'>Ready to turn your digital vision into a powerful reality</p>
        </div>
        <div className='flex flex-row pt-16'>
            <div className='flex flex-col items-center text-center'>
              <span><img src="src\assets\email-icon.jpg" alt="" className='w-10 mb-3'/></span>
              <h1 className='font-heading font-medium text-2xl mb-2.5'>Email</h1>
              <p className='mb-3'>Professional communication channel for project inquiries and collaboration</p>
              <p>japhethjorquia@gmail.com</p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <span><img src="src\assets\facebook-logo.avif" alt="" className='w-10 rounded-4xl mb-3'/></span>
              <h1 className='font-heading font-medium text-2xl mb-2.5'>Facebook</h1>
              <p className='mb-3'>Direct line for immediate technical consultation and project discussions</p>
              <p>Jp's Web Development</p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <span><img src="src\assets\instagram-logo.avif" alt="" className='w-10 rounded-4xl mb-3'/></span>
              <h1 className='font-heading font-medium text-2xl mb-2.5'>Instagram</h1>
              <p className='mb-3'>Primary workspace for strategic development and client engagement</p>
              <p>Jp's Web Development</p>
            </div>
        </div>
    </section>
  )
}

export default Contact