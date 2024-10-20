import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import "./index.css";
import {Routes, Route, useLocation} from "react-router-dom";

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>

      </Routes>
    </>
  );
};

export default App;
