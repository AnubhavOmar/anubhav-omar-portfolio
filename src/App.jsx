import React from 'react'
import {Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cursor from './components/Cursor'


const App = () => {
  return (
    <div className='cursor-none'>
      <Cursor />

      <Navbar/> 
      {/* navabar jo hai harr section me show karwana hai to usse app.jsx me rakhenge */}
      {/* BrowserRouter URL ko monitor karta hai, aur Routes us URL ko check karke decide karta hai ki kaunsa Route match ho raha hai aur kaunsa component screen par dikhana hai.*/}
      <Routes> 
          <Route path='/' element = {<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
