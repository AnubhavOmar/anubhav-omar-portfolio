import React from 'react'
import { motion , easeOut } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCards from './ProjectCards'
import { FaArrowRight } from 'react-icons/fa'

const Projects = () => {
  return (
    <motion.div
        initial = {{ opacity : 0 , y : 50 }}
        whileInView = {{opacity : 1 , y : 0 }} // isska mtlb hai jaise hee content dikhega to usski opacity 1 ho jayegi aur usski location y = 0 ho jaayegi
        transition={{duration : 1 , ease : easeOut }} // animate
        viewport={{once : false , amount:0.2 }}
        id='projects'
        className='py-20 bg-dark-200'
    >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>
                My
                <span className='text-purple'> Projects</span>
            </h2>

            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>A Section of my recent work</p>

            {/* from here the code of cards in my projects section starts */}
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                
                {/* Projects Cards */}

                {
                    projects.map( (project,index)=>(
                            // using card component 
                            <ProjectCards key={index} {...project} />

                    ))
                }

            </div>

            <div className='text-center mt-12'>

                    <a href="https://github.com/AnubhavOmar?tab=repositories" 
                    className='inline-flex items-center px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20  transition duration-300' 
                    target='_blank'
                    rel="noopener noreferrer">

                        <span>View All Projects</span>

                        <FaArrowRight className='ml-2' />
                    </a>
            </div>

        </div>


    </motion.div>
  )
}

export default Projects
