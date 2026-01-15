import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section className='bg-white p-15' id='Projects'>
        <div className='flex flex-col items-center'>
            <h2 className='font-heading font-semibold mb-5'>Portfolio</h2>
            <h1 className='font-heading text-4xl mb-5'>All my web development projects</h1>
            <p className='font-body'>Showcasing my featured projects in my career</p>
        </div>
        <div>
            <ProjectCard
            image='\assets\image-search.jpg'
            title={'Image search app'}
            description="Firebase-powered task management app with responsive web interfaces, enabling seamless user interactions through dynamic layouts and advanced search functionality"
            sub1={'React'}
            sub2={'Tailwind'}
            sub3={'API'}/>

            <ProjectCard
            image='\assets\to-do.jpg'
            style={'flex justify-end'}
            title={'Task management app'}
            description="Firebase-powered task management app with responsive web interfaces, enabling seamless user interactions through dynamic layouts and advanced search functionality"
            sub1={'Next.js'}
            sub2={'TypeScript'}
            sub3={'Firebase'}/>

            <ProjectCard
            image='\assets\Weather.jpg'
            title={'Weather forecast app'}
            description="Dynamic data visualization with precise geolocation and responsive design"
            sub1={'React'}
            sub2={'OpenWeather'}
            sub3={'Geolocation'}/>
        </div>
    </section>
  )
}

export default Projects