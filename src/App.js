import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/Navbar/Navbar';
import arrow from './asset/ui/down-arrow.png'
import Horoscope from './pages/horoscope/Horoscope';


function App() {
  return (
    <Router basename='/stardust'>
      <div className='app'>
        <div className='scroll-top'>
          <img src={arrow} 
            onClick={()=>{window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })}} alt="" />
        </div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/daily-horoscope' element={<Horoscope />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
