import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navbar ${showMenu ? 'show' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={require('../images/Tribal.png')} alt="" />
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/categories">Categories
            <select>
            <option value="Dresses" >Dresses</option>
            <option value="Tops">Tops</option>
            <option value="Pants">Pants</option>
            <option value="Shoes">Shoes</option>
            <option value="Accessories">Accessories</option>
            </select>
            </Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button className="sign-up">
              <Link to="/signup">Sign Up</Link>
            </button>
          </li>
          <li>
            <button className="sign-in">
              <Link to="/signin">Sign In</Link>
            </button>
          </li>
          {/* Add more nav links as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
