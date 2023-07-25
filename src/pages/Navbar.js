import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
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
            <Link to="/home" onClick={closeDropdown}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={closeDropdown}>
              Products
            </Link>
          </li>
          <li>
            <div className="dropdown-container" onClick={toggleDropdown}>
                Categories
                <i className={`fas ${showDropdown ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/dresses" onClick={closeDropdown}>
                      Dresses
                    </Link>
                  </li>
                  <li>
                    <Link to="/tops" onClick={closeDropdown}>
                      Tops
                    </Link>
                  </li>
                  <li>
                    <Link to="/pants" onClick={closeDropdown}>
                      Pants
                    </Link>
                  </li>
                  <li>
                    <Link to="/shoes" onClick={closeDropdown}>
                      Shoes
                    </Link>
                  </li>
                  <li>
                    <Link to="/accessories" onClick={closeDropdown}>
                      Accessories
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <Link to="/contact" onClick={closeDropdown}>
              Contact
            </Link>
          </li>
          <li>
              <Link to="/signup" onClick={closeDropdown}>
                Sign Up
              </Link>
          </li>
          <li>
              <Link to="/signin" onClick={closeDropdown}>
                Sign In
              </Link>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
