import React from 'react';
import {Link} from "react-router-dom";
import picture from "../assets/portfolio-LOGO.svg";

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

                
                <Link className="nav-link" to="/">
                    <h1>Home</h1>
                </Link>
                
            </div>
            <div className="nav-item">
                <Link className="nav-link" to="/about">
                <h1>About</h1>
                </Link>
            </div>
            <div className="nav-item">
                <Link className="nav-link" to="/contact">
                <h1>Contact</h1>
                </Link>
            </div>
        </div>
    </nav>
  );
};

export default NavBar;
