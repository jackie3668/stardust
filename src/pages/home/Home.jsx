import React, { useEffect } from 'react'
import './Home.css'
import star from '../../asset/ui/star (1).png'
import spot1 from '../../asset/home/spotlight1.png'
import spot2 from '../../asset/home/spotlight2.png'
import spot3 from '../../asset/home/spotlight3.png'
import period from '../../asset/ui/period.png'

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll');

      scrollElements.forEach((scrollElement) => {
        const rect = scrollElement.getBoundingClientRect();

        if (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
          scrollElement.classList.add('fade-in-2');
        }  else {
          scrollElement.classList.remove('fade-in-2');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className='hero'>
        <div className="hero-line"></div>
        <h3 className='fade-in-1'>Your Destiny Is</h3>
        <h1 className='fade-in-1'>IN THE STARDUST</h1>
        <button>GET DAILY HOROSCOPE</button>
      </div>
      <div className="brand-msg">
        <h1 className='scroll'>Unlocking the <span>Secrets</span>, One <span>Star</span> at a Time</h1>
        <div></div>
        <p className='scroll'>A horoscope is an astrological forecast based on the positions of celestial bodies at the time of a person's birth. It offers insights into one's personality traits, tendencies, and potential life events. Horoscopes are commonly used for guidance, self-reflection, and understanding how cosmic influences may impact various aspects of life, such as relationships, career, and personal growth.</p>
      </div>
      <div className="brand-spotlight">
        <div class="scroll-container scroll">
          <div class="scroll-box">
            <div class="scroll-content">
              <p>Unlock the Secrets of the Stars</p>
              <img src={star} alt="" />
              <p>Embrace Your Celestial Journey</p>
              <img src={star} alt="" />
              <p>Illuminate Your Path with Stardust</p>
              <img src={star} alt="" />
              <p>Unlock the Secrets of the Stars</p>
              <img src={star} alt="" />
              <p>Embrace Your Celestial Journey</p>
              <img src={star} alt="" />
              <p>Illuminate Your Path with Stardust</p>
              <img src={star} alt="" />
            </div>
          </div>
        </div>

        <div className="brand-spotlight-wrappers">
          <div className="brand-spotlight-wrapper">
            <div className="brand-spotlight-img">
              <img className='image' src={spot1} alt="" />
              <h1 className='scroll'><img src={period} alt="" />personalized<img src={period} alt="" /></h1>
            </div>
            <p className='scroll'>Discover personalized horoscopes by entering birth date, time, and location.</p>
            <button className='scroll'>START</button>
          </div>
          
          <div className="brand-spotlight-wrapper">
            <div className="brand-spotlight-img">
              <img className='image' src={spot2} alt="" />
              <h1 className='scroll'><img src={period} alt="" />trendy<img src={period} alt="" /></h1>
            </div>
            <p className='scroll'>Explore zodiac blog posts for insights, advice, and captivating stories.</p>
            <button className='scroll'>START</button>
          </div>

          <div className="brand-spotlight-wrapper">
            <div className="brand-spotlight-img">
              <img className='image' src={spot3} alt="" />
              <h1 className='scroll'><img src={period} alt="" />guidance<img src={period} alt="" /></h1>
            </div>
            <p className='scroll'>Stardust empowers individuals with tailored horoscopes for life's journey.</p>
            <button className='scroll'>START</button>
          </div>
        </div>
        

      </div>
   
    </div>
  )
}

export default Home