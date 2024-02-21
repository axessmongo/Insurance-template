import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Nav from './Components/Nav';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<Nav />} />

        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
