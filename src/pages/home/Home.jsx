import React, { useEffect, useState } from 'react'
import './Home.css'
import star from '../../asset/ui/star (1).png'
import spot1 from '../../asset/home/spot1.png'
import spot2 from '../../asset/home/spot2.png'
import spot3 from '../../asset/home/spot3.png'
import period from '../../asset/ui/period.png'
import left from '../../asset/ui/left-arrow.png'
import right from '../../asset/ui/right-arrow.png'
import headshot from '../../asset/home/headshot.png'
import step1 from '../../asset/home/horoscope (1).png'
import step2 from '../../asset/home/ball.png'
import step3 from '../../asset/home/eye (1).png'
import add from '../../asset/ui/add.png'
import remove from '../../asset/ui/remove.png'
import diamond from '../../asset/ui/diamond.png'

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll');
      const scrollPosition = window.scrollY
      scrollElements.forEach((scrollElement) => {
        const rect = scrollElement.getBoundingClientRect();
        const offset = scrollElement.offsetTop + scrollElement.offsetHeight
        if (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
          scrollElement.classList.add('fade-in-2');
        }  else if ( offset < scrollPosition ) {
          scrollElement.classList.remove('fade-in-2');
        } 
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [sliderPosition, setSliderPosition] = useState(0)


  const handleQuestionClick = (e) => {
    const targetP = e.target.parentNode.nextElementSibling
    targetP.classList.toggle('active')
    const targetImg = e.target.parentNode.querySelector('img')
    targetImg.src = targetP.classList.contains('active') ? remove : add
  }

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


      <div className="slider">
        <div className="slider-arrow"  onClick={() => {setSliderPosition(prev => (prev - 1) % 4)}}>
          <img src={left} alt="" />
        </div>
        <div className={`slider-quote ${sliderPosition === 0 ? 'active' :'inactive'}`}>
          <h3>"Stardust's horoscopes are spot-on! Highly recommended!"</h3>
          <p>Elizabeth Olsen<img src={star} alt="" /></p>
        </div>
        <div className={`slider-quote ${sliderPosition === 1 ? 'active' :'inactive'}`}>
          <h3>"I've found invaluable guidance here. Thanks, Stardust!"</h3>
          <p>Michael Johnson<img src={star} alt="" /></p>
        </div>
        <div className={`slider-quote ${sliderPosition === 2 ? 'active' :'inactive'}`}>
          <h3>"Stardust's blog keeps me inspired and informed. Love it"</h3>
          <p>Daniel Lee<img src={star} alt="" /></p>
        </div>
        <div className={`slider-quote ${sliderPosition === 3 ? 'active' :'inactive'}`}>
          <h3>"Accurate and uplifting horoscopes every time. Kudos, Stardust"</h3>
          <p>Emily Davis<img src={star} alt="" /></p>
        </div>
        <div className="slider-arrow" onClick={() => {setSliderPosition(prev => (prev + 1) % 4)}} >
          <img src={right} alt="" />
        </div>
      </div>

      <div className='bio-divider'></div>

      <div className="bio">
        <div className='bio-headshot'>
          <h2>behind the brand</h2>
          <img src={headshot} alt="" />
        </div>
        <div className='bio-text'>
          <h3>Hi I am Jasmine Lee.</h3>
          <p>Jasmine, a gifted astrologist, illuminates life's mysteries through celestial insights. Her passion for astrology has guided countless souls on their journeys.</p>
          <button>BOOK NOW</button>
        </div>
      </div>

      <div className='steps'>
        <h1>Getting <span>Started</span></h1>
        <div className="steps-wrapper">
          <img src={step1} alt="" />
          <h3>Choose Your Service</h3>
          <div className='divider'></div>
          <p>Select the service that suits you best: Birth Chart Reading, Relationship Insights, or Cosmic Coaching.</p>
        </div>
        <div className="steps-wrapper">
          <img src={step2} alt="" />
          <h3>Book Your Session</h3>
          <div className='divider'></div>
          <p>Select the service that suits you best: Birth Chart Reading, Relationship Insights, or Cosmic Coaching.</p>
        </div>
        <div className="steps-wrapper">
          <img src={step3} alt="" />
          <h3>Receive Your Guidance</h3>
          <div className='divider'></div>
          <p>Select the service that suits you best: Birth Chart Reading, Relationship Insights, or Cosmic Coaching.</p>
        </div>
      </div>

      <div className="faq">
        <h1>FAQ</h1>
        <div className="faq-container">
          <div className="faq-wrapper">
            <div className="faq-question">
              <h2 onClick={handleQuestionClick}>What is Horoscope?</h2>
              <img src={add}  onClick={handleQuestionClick} alt="" />
            </div>
            <p>Horoscope is a forecast of a person\'s future, typically including their character and circumstances, based on the positions of the planets and stars at the time of their birth.</p>
          </div>
          <div className="faq-wrapper">
            <div className="faq-question">
              <h2 onClick={handleQuestionClick}>What is Astrology?</h2>
              <img src={add} onClick={handleQuestionClick} alt="" />
            </div>
            <p>Astrology is the study of the movements and relative positions of celestial bodies (such as planets and stars) as having an influence on human affairs and natural phenomena.</p>
          </div>
          <div className="faq-wrapper">
            <div className="faq-question">
              <h2 onClick={handleQuestionClick}>What is Stardust?</h2>
              <img src={add} onClick={handleQuestionClick} alt="" />
            </div>
            <p>Stardust is a platform that provides personalized guidance through horoscopes, empowering individuals to navigate life\'s twists.</p>
          </div>
        </div>
      </div>

      <div className="newsletter">
        <h1><img src={diamond} alt="" />Claim your <span>FREE</span> Lunar Love Guide</h1>
        <div className="newsletter-signup">
          <input type="email" placeholder='Email' />
          <button>Sign Up</button>
        </div>
      </div>

      <div className="footer"></div>

    </div>
  )
}

export default Home