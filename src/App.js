import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/Navbar/Navbar';
import arrow from './asset/ui/down-arrow.png'
import Horoscope from './pages/horoscope/Horoscope';
import Footer from './components/Footer/Footer';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';


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
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
