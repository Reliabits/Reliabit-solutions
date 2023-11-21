import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from '../src/components/home/Home'
import Services from './components/services/Services';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/contact/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css'
function App() {
  useEffect(() => {
    Aos.init({
      delay: 400,
      duration: 800,
    });
  }, [])
  return (
    <div className='container-fluid'>
    
      <Header />
      <Routes>
        <Route path="/home" element={ <Home /> } />
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
