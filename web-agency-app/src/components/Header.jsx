import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <header>
      <nav>
      <h3 className='logo'>TechMint </h3>
     
     
        <ul>
         


          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
         
        </ul>
      </nav>
    </header>
  );
};

export default Header;
