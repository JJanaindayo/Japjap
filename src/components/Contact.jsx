import React from 'react'

const Contact = () => {
  return (
    <section 
      id="Contact" 
      className="bg-[#F2F2F2] px-6 sm:px-10 lg:px-20 py-10 sm:py-16 lg:py-20"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="font-heading font-bold mb-3 text-base sm:text-lg">Connect</h2>
        <h1 className="font-heading font-medium text-2xl sm:text-3xl lg:text-[2.75rem] mb-3">
          Start a conversation
        </h1>
        <p className="font-body text-sm sm:text-base lg:text-lg">
          Ready to turn your digital vision into a powerful reality
        </p>
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-6">
        {/* Email */}
        <div className="flex flex-col items-center text-center">
          <img src="/assets/email-icon.jpg" alt="Email icon" className="w-12 sm:w-14 mb-3 object-contain"/>
          <h1 className="font-heading font-medium text-xl sm:text-2xl mb-2.5">Email</h1>
          <p className="mb-3 text-sm sm:text-base">Professional communication channel for project inquiries and collaboration</p>
          <p className="font-body text-sm sm:text-base">japhethjorquia@gmail.com</p>
        </div>

        {/* Facebook */}
        <div className="flex flex-col items-center text-center">
          <img src="/assets/facebook-logo.avif" alt="Facebook logo" className="w-12 sm:w-14 rounded-full mb-3 object-contain"/>
          <h1 className="font-heading font-medium text-xl sm:text-2xl mb-2.5">Facebook</h1>
          <p className="mb-3 text-sm sm:text-base">Direct line for immediate technical consultation and project discussions</p>
          <p className="font-body text-sm sm:text-base">Jp's Web Development</p>
        </div>

        {/* Instagram */}
        <div className="flex flex-col items-center text-center">
          <img src="/assets/instagram-logo.avif" alt="Instagram logo" className="w-12 sm:w-14 rounded-full mb-3 object-contain"/>
          <h1 className="font-heading font-medium text-xl sm:text-2xl mb-2.5">Instagram</h1>
          <p className="mb-3 text-sm sm:text-base">Primary workspace for strategic development and client engagement</p>
          <p className="font-body text-sm sm:text-base">Jp's Web Development</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
