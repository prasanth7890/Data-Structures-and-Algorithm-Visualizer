import React from 'react';
import "./Nav-css.css";
import logo from './logo.jpg';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <img src={logo} alt="Logo" />
          </li>
        </ul>
      </nav>
    );
  }
  
  export default NavigationBar;