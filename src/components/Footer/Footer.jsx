import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import star from '../../asset/ui/star (1).png'
import discord from '../../asset/home/discord.png'
import instagram from '../../asset/home/instagram.png'
import twitter from '../../asset/home/twitter.png'
import facebook from '../../asset/home/facebook.png'
import whatsapp from '../../asset/home/whatsapp.png'
import youtube from '../../asset/home/youtube.png'
import tiktok from '../../asset/home/tik-tok.png'
import pinterest from '../../asset/home/pinterest.png'

const Footer = () => {
  return (
    
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-logo footer-section">
          <h2>Stardust Astrology <img src={star} alt="" /></h2>
        </div>
        <div className="footer-section">
          <h3>Information</h3>
          <ul>
            <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>HOME</Link></li>
            <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>ABOUT</Link></li>
            <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>FAQ</Link></li>
            <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>BLOG</Link></li>
            <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>CONTACT</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>The Shop</h3>
          <ul>
            <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>SHOP</Link></li>
            <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>PRIVACY POLICY</Link></li>
            <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>SHIPPING POLICY</Link></li>
            <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>REFUND POLICY</Link></li>
            <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>TERMS OF SERVICE</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Stardust</h3>
          <p>Explore the cosmos of your destiny with Stardust: Your personal guide to the stars and horoscopes!</p>
        </div>
      </div>
      <div className="footer-bot">
        <div className='divider'></div>
        <div className="footer-bot-socials">
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <img src={discord} alt="Discord Icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram Icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter Icon" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook Icon" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="WhatsApp Icon" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="YouTube Icon" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src={tiktok} alt="TikTok Icon" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <img src={pinterest} alt="Pinterest Icon" />
          </a>
        </div>
        <div className="footer-bot-copyright">
        &copy; 2024 Stardust. All Rights Reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer