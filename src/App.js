import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from '../src/components/home/Home'
import Services from './components/services/Services';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/contact/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Footer from './components/footer/Footer';
function App() {
  useEffect(() => {
    Aos.init({
    });
  }, [])
  return (
    <div className='container-fluid'>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
