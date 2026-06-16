import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  /*
    Browser Router and Routes and Routes
    1. BrowserRouter: Iska main kaam website ko ek "Single Page Application" (SPA) banana hai. Yeh URL ko track karta hai aur allow karta hai ki website bina poori tarah reload (refresh) hue, naye pages ya components ko screen par turant display kar sake.
    2. Route: Yeh ek 'rule' ya 'rasta' hota hai jo yeh decide karta hai ki browser ke kis exact link (URL) par user ko kaun sa page ya component dikhana hai. (Jaise is project mein: agar link / hai, toh screen par <Home /> page dikhao)
    
    // BrowserRouter URL ko monitor karta hai, aur Routes us URL ko check karke decide karta hai ki kaunsa Route match ho raha hai aur kaunsa component screen par dikhana hai.
  */
  <BrowserRouter>
    <App />
  </BrowserRouter>

)
