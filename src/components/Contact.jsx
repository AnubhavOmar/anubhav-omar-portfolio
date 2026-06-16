import React from 'react'
import {motion , easeOut} from 'framer-motion'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.2 }}
        id='contact'
        className='py-20 bg-dark-100'>

            <div className='container mx-auto px-6'>
              <h2 className='text-3xl font-bold text-center mb-4'>
                  Get in
                  <span className='text-purple'> Touch</span>
              </h2>

              <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? Let's talk! </p>


              {/* form and info */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>

                {/* Contact Form  */}
                 <div>
                  <form action="" className='space-y-6'>

                    <div>
                      <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                      <input type=" text" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
                    </div>


                    <div>
                      <label htmlFor="email" className='block text-gray-300 mb-2'>E-Mail Address</label>
                      <input type=" email" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
                    </div>


                    <div>
                      <label htmlFor="message" className='block text-gray-300 mb-2'>Your Message</label>
                      <textarea type=" text" className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
                    </div>

                    <button type= 'submit' className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>
                      Send
                    </button>

                  </form>

                </div>


                {/* Contact Form side Info and Follow Me */}
                <div className='space-y-8 '>

                  <div className='flex items-start'>

                    <div className='text-purple text-2xl mr-4' >

                      <FaMapMarkerAlt /> 
                    </div>

                    <div>

                      <h3 className='text-lg font-semibold mb-2'>Location</h3>

                      <p className='text-gray-400'>Kanpur , Uttar Pradesh</p>

                    </div>

                  </div>


                  <div className='flex items-start'>

                    <div className='text-purple text-2xl mr-4' >

                      <FaEnvelope /> 
                    </div>

                    <div>

                      <h3 className='text-lg font-semibold mb-2'>Email</h3>

                      <p className='text-gray-400'>anubhavomar123@gmail.com</p>

                    </div>

                  </div>


                  <div className='flex items-start'>

                    <div className='text-purple text-2xl mr-4' >

                      <FaPhone /> 
                    </div>

                    <div>

                      <h3 className='text-lg font-semibold mb-2'>Phone</h3>

                      <p className='text-gray-400'>+91 63872 66500</p>

                    </div>
                  </div>

                  {/* Follow me  */}

                  <div className='pt-4'>

                    <h3 className='text-lg font-semibold mb-4 '>Follow Me</h3>

                    
                    <div className='mb-4'>
                      <a
                        href="https://www.linkedin.com/in/anubhav-omar-147n/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex items-center space-x-4 group'
                      >
                        <div className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue group-hover:bg-blue group-hover:text-white transition duration-300'>
                          <FaLinkedin />
                        </div>

                        <h2 className='text-gray-300 font-medium text-lg group-hover:text-blue transition duration-300'>
                          Follow me on LinkedIn!
                        </h2>
                      </a>
                    </div>


                    <div className='mb-4'>
                      <a
                        href="https://github.com/anubhavomar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex items-center space-x-4 group'>

                        <div className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition duration-300'>
                          <FaGithub />
                        </div>

                        <h2 className='text-gray-300 font-medium text-lg group-hover:text-black transition duration-300'>
                          Follow me on Github!
                        </h2>
                      </a>
                    </div>
                    


                    <div className='mb-4'>
                      <a
                        href="https://www.instagram.com/anubhav147n/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex items-center space-x-4 group'> 

                        <div className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink group-hover:bg-pink group-hover:text-white transition duration-300'>
                          <FaInstagram />
                        </div>

                        <h2 className='text-gray-300 font-medium text-lg group-hover:text-pink transition duration-300'>
                          Follow me on Instagram!
                        </h2>
                      </a>
                    </div>

                  </div>


                </div>

              </div>

            </div>

    </motion.div>
  )
}

export default Contact
