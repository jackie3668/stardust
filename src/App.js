import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router basename='/stardust'>
      <div className='app'>
        <Navbar />
        <Home />
        <Routes>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
