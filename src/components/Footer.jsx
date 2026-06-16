import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-dark-200 border-t border-dark-400 py-8'>
      
      <div className='container mx-auto px-6'>

        {/* Logo & Role */}
        <div className='text-center'>

          <h2 className='text-3xl font-bold text-white'>
            Anubhav
            <span className='text-purple'> Omar</span>
          </h2>

          <p className='text-gray-400 mt-2'>
            Full Stack Developer
          </p>

        </div>

        {/* Divider */}
        <div className='border-t border-dark-400 my-6'></div>

        {/* Bottom Section */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm'>

          <p>
            © {new Date().getFullYear()} Anubhav Omar. All rights reserved.
          </p>

          <p className='flex items-center gap-2'>
            Made with
            <span className='text-purple text-base'>❤</span>
            and using React & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer