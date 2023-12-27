import React, { useState, useEffect } from 'react'
import './Navbar.css'
import open from '../../asset/ui/hamburger.png'
import close from '../../asset/ui/close.png'


const Navbar = () => {
  const [menuHidden, setMenuHidden] = useState(true)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769)

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='page navbar'>
      <div className="navbar-top">
        <h2>Stardust Astrology</h2>
        <img src={menuHidden && isMobile ? open : close} className={menuHidden ? 'invert' : ''} onClick={() => setMenuHidden(!menuHidden)} alt="" />
      </div>
      <div className={`navbar-items ${menuHidden && isMobile? 'fadeout' : 'fade-in'}`}>
        <ul className={`${isMobile ? (menuHidden ? 'slide-out-blurred-bottom' : 'slide-in-blurred-bottom') : ''}`}>          <li>Home</li>
          <li>About</li>
          <li>Horoscope</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Support Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar