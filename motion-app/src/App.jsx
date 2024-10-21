import { Component, useStates } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import {Routes, Route, useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';



import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';





function App() {
  const location = useLocation();


/*   let state = useStates("main", {
    menu: [
        { label: "HOME", path: "/", Component: Home},
        { label: "ABOUT", path: "/about", Component: About},
        { label: "CONTACT", path: "/contact", Component: Contact},
    ]
  }) */

  return (
    <>
      <NavBar />
<AnimatePresence mode="wait">
<Routes location={location} key={location.pathname}>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
</AnimatePresence>
    </>
  );
};

export default App;
