import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import open from '../../asset/ui/hamburger.png'
import close from '../../asset/ui/close.png'


const Navbar = () => {
  const [menuHidden, setMenuHidden] = useState(true)
  const [className1, setClassName1] = useState('hidden')
  const [className2, setClassName2] = useState('hidden')
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuHidden(true)
        setClassName1('hidden')
        setClassName2('hidden')
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='navbar'>
      <div className="navbar-top">
        <h2>Stardust Astrology</h2>
        <img
          src={menuHidden ? open : close}
          className={menuHidden ? 'invert' : ''}
          onClick={() => {
            setMenuHidden(!menuHidden);
            setClassName1(`${menuHidden ? 'fade-in' : 'fadeout'}`); 
            setClassName2(`${menuHidden ? 'slide-in-blurred-bottom' : 'slide-out-blurred-bottom'}`); // Use backticks here
          }}
          alt=""
        />
      </div>
      <div className={`navbar-items ${className1}`}>
        <ul className={`${className2}`}>          
          <li>Home</li>
          <li>About</li>
          <li><Link to='/daily-horoscope'>Horoscope</Link></li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Support Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar