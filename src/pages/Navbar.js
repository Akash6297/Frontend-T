/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container" >
      
        <Link to="/" className="logo"  >
        
        <img src={require('../images/Tribal.png')} alt=""/>
          
        </Link>
        
        
        <ul className="nav-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* Add more nav links as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
