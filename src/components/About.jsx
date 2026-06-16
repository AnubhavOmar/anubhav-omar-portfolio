import React from 'react'
import {motion ,easeOut} from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'


const About = () => {
  return (
    <motion.div
        initial = {{opacity : 0 , y : 50 }} // ye jo content hai iss div ke andar wo isske through render hoga aur opacity phle to 0 hogi and then y-axis se 50pixel neeche se upper aati hui dekhega 

        whileInView = {{opacity : 1 , y : 0 }} // isska mtlb hai jaise hee content dikhega to usski opacity 1 ho jayegi aur usski location y = 0 ho jaayegi

        transition={{duration : 0.6 , ease : easeOut }} // animate
        viewport={{once : true}}
        id = 'about'
        className='py-20 bg-dark-200'
        >
            
        <div className='container  mx-0 px-6'>

            {/* Heading */}
            <h2 className='text-3xl font-bold text-center mb-4'>About
                <span className='text-purple'>Me</span>
            </h2>
            
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion</p>


            {/* Image + Text Content */}
            <div className='flex flex-col md:flex-row items-center gap-12'>

                {/* Image */}
                <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                    <motion.img 
                        initial = {{ opacity : 0 , y : 50 }}
                        whileInView = {{opacity : 1 , y : 0 }} // isska mtlb hai jaise hee content dikhega to usski opacity 1 ho jayegi aur usski location y = 0 ho jaayegi
                        transition={{duration : 0.9 , ease : easeOut }} // animate
                        viewport={{once : false , amount:0.2 }}
                          className='w-full max-w-lg mx-auto rounded-2xl object-cover'
                        src={assets.profileImg} alt="Profile_Image" />
                </div>

                {/* Text Content */}
                <motion.div 
                        initial = {{ opacity : 0 , y : 50 }}
                        whileInView = {{opacity : 1 , y : 0 }} // isska mtlb hai jaise hee content dikhega to usski opacity 1 ho jayegi aur usski location y = 0 ho jaayegi
                        transition={{duration : 0.9 , ease : easeOut }} // animate
                        viewport={{once : false , amount:0.2 }}
                        className='md:w-1/2'
                        >
                            <div className='rounded-2xl p-8'>
                                <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>

                                <p className='text-gray-300 mb-6 '>I am a Computer Science student passionate about web development, problem solving, and software engineering. I build responsive web applications using HTML, CSS, JavaScript, and React, and enjoy turning ideas into practical and user-friendly solutions while continuously improving my skills.</p>

                                <p className='text-gray-300 mb-12 '>Alongside web development, I practice Data Structures and Algorithms in C++ on LeetCode and strengthen my database skills through MySQL and SQL challenges. I also work with Python, NumPy, Pandas, and Matplotlib, and contributed to GauMitra, a machine learning-based group project. In the future, I plan to explore Artificial Intelligence and Machine Learning while continuing to build real-world projects and expand my technical knowledge.</p>


                                {/* Cards after Text beside Image*/}
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    {
                                            // ye jo issme data index and description hai wo assests.js se aa rhi hai
                                        aboutInfo.map( (data,index)=> (
                                            <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:translate-y-2 cursor-pointer'>
                                                <div className={`${data.color} text-4xl mb-4`}>
                                                    <data.icon />
                                                </div>
                                                <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>

                                                <p className='text-gray-400'>{data.description}</p>

                                            </div>
                                        )) 
                                    }

                                </div>

                            </div>

                </motion.div>

            </div>

        </div>
      

    </motion.div>
  )
}

export default About
