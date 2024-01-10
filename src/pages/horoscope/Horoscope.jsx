import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Horoscope.css'
import aries from '../../asset/ui/zodiac/aries.png'
const Horoscope= () => {
  const [dailyHoroscope, setDailyHoroscope] = useState({});
  const [sign, setSign] = useState('Aries');
  const [offset, setOffset] = useState(2)


  useEffect(() => {
    handleGetDailyHoroscope(0)
  }, [setOffset, offset])

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
      <div className="horoscope-generator">
        <div className='horoscope-day'>
          <button onClick={()=> {setOffset(-1)}}>Yesterday</button>
          <button onClick={()=> {setOffset(0)}}>Today</button>
          <button onClick={()=> {setOffset(1)}}>Tomorrow</button>
        </div>
        <div className="horoscope-signs">
          <div>
            <img src={aries} alt="" />
            <p>{dailyHoroscope['Aries']}</p>
          </div>
          <button>Aries</button>
          <button>Taurus</button>
          <button>Gemini</button>
          <button>Cancer</button>
          <button>Leo</button>
          <button>Virgo</button>
          <button>Libra</button>
          <button>Scorpio</button>
          <button>Sagittarius</button>
          <button>Capricorn</button>
          <button>Aquarius</button>
          <button>Pisces</button>
        </div>
      </div>
    </div>
  );
}

export default Horoscope;
