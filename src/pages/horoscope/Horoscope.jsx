import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import './Horoscope.css'
import period from '../../asset/ui/period.png'

const Horoscope= () => {
  const [dailyHoroscope, setDailyHoroscope] = useState({});
  const [sign, setSign] = useState('Aries');
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    handleGetDailyHoroscope(0)
  }, [setOffset, offset, setSign, sign])

  const handleGetDailyHoroscope = async () => {
    console.log('pressed');
    const today = new Date();
    const month = today.getMonth() > 9 ? today.getMonth().toString : '0' + (today.getMonth() + 1).toString()
    const day = (today.getDate() + offset) > 10 ? (today.getDate() + offset) : '0' + (today.getDate() + offset).toString()
    console.log(`2022-${month}-${(Number(day))}`)
    const options = {
      method: 'GET',
      url: 'https://horoscope34.p.rapidapi.com/api/horoscope/byDate',
      params: { date: `2022-${month}-${day}`},
      headers: {
        'X-RapidAPI-Key': '11508c4a15msh9a6b1b310d5c085p1f0406jsn3028f9f76d6e',
        'X-RapidAPI-Host': 'horoscope34.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      setDailyHoroscope(response.data.payload);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='horoscope'>
      <div className="horoscope-banner">
      </div>
      <div className="horoscope-generator fade-in-1">
        <div className='horoscope-day'>
          <button onClick={()=> {setOffset(-1)}} className={offset === -1 ? 'active' : ''}>Yesterday</button>
          <button onClick={()=> {setOffset(0)}} className={offset === 0 ? 'active' : ''}>Today</button>
          <button onClick={()=> {setOffset(1)}} className={offset === 1 ? 'active' : ''}>Tomorrow</button>
        </div>
        <div className="horoscope-signs">
          <div className="horoscope-signs-buttons">
            {[
              'Aries',
              'Taurus',
              'Gemini',
              'Cancer',
              'Leo',
              'Virgo',
              'Libra',
              'Scorpio',
              'Sagittarius',
              'Capricorn',
              'Aquarius',
              'Pisces',
            ].map((signOption) => (
              <button
                key={signOption}
                className={sign === signOption ? 'active' : ''}
                onClick={() => setSign(signOption)}
              >
                {signOption}
              </button>
            ))}
          </div>
        </div>

      {dailyHoroscope[sign] && (
        <div key={`${offset}-${sign}`} className='horoscope-text fade-in-2'>
          <h3><img src={period} alt="" />    {new Date(new Date().getTime() + offset * 24 * 60 * 60 * 1000).toDateString()}<img src={period} alt="" /></h3>
          <h2><img src={require(`../../asset/ui/zodiac/${sign.toLowerCase()}.png`)} alt={sign} />{sign}:&nbsp; <span>April 04-April 28</span></h2>
          <p>{dailyHoroscope[sign]}</p>
        </div>
      )}
      </div>
      <div className='back'  onClick={() => window.scrollTo(0, 0)}><Link to='/'>&lt;  &nbsp; Back</Link></div>
    </div>
  );
}

export default Horoscope;
