import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/homepage/Home';
import { About } from './pages/about/About';
import { Contact } from './pages/contact/Contact';
import { Faq } from './pages/faq/Faq';
import { NotFound } from './pages/notfound/NotFound';


import './App.css';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <div className="App">
      
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          * <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
    </>
  );
}

export default App;
