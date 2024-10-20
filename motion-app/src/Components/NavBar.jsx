import React from 'react';
import {Link, NavLink} from "react-router-dom";
import picture from "../assets/portfolio-LOGO.svg";
import transition from '../transition';


export const NavBar = () => {
  return (
    <nav className="navbar">
        <div className="logo">
            <Link className="nav-link" to="/">
            <img src={picture} alt="Logo" />
            </Link>
        </div>
        <div className="nav-links">
            <div className="nav-item">

                
                <NavLink className="nav-link"  to="/" activeClassname="active-link">
                    <h1>Home</h1>
                </NavLink>
                
            </div>
            <div className="nav-item">
                <NavLink className="nav-link" to="/about" activeClassname="active-link"  >
                <h1>About</h1>
                </NavLink>
            </div>
            <div className="nav-item">
                <NavLink className="nav-link" to="/contact" activeClassname="active-link" >
                <h1>Contact</h1>
                </NavLink>
            </div>
        </div>
    </nav>
  );
};

export default transition(NavBar);
