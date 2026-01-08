import React from 'react'

const ProjectCard = ({image, title, style, description, sub1, sub2, sub3}) => {
  return (
    <section className={`pt-15 ${style}`}>
        <div className={`w-2xl border border-gray-300 rounded-2xl`}>
            <img src={image} alt="" className='rounded-t-2xl'/>
            <h1 className='pt-5 pb-3 px-5 font-heading font-medium text-xl'>{title}</h1>
            <p className='px-5 pb-2'>{description}</p>
            <div className='px-5 mb-6'>
              <span className='bg-gray-200 rounded mr-2 p-1 font-body font-medium text-sm'>{sub1}</span>
              <span className='bg-gray-200 rounded mr-2 p-1 font-body font-medium text-sm'>{sub2}</span>
              <span className='bg-gray-200 rounded mr-2 p-1 font-body font-medium text-sm'>{sub3}</span>
            </div>
        </div>
    </section>
  )
}

export default ProjectCard