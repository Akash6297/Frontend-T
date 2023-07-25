import React, { useState, useEffect } from 'react';
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

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    // Add event listener to close the menu when a link inside the menu is clicked
    const handleLinkClick = () => {
      setShowMenu(false);
    };

    const links = document.querySelectorAll('.nav-links a, .nav-links button');
    links.forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      // Clean up the event listener on unmount
      links.forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

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
            <Link to="/home" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={closeMenu}>
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
                    <Link to="/dresses" onClick={closeMenu}>
                      Dresses
                    </Link>
                  </li>
                  <li>
                    <Link to="/tops" onClick={closeMenu}>
                      Tops
                    </Link>
                  </li>
                  <li>
                    <Link to="/pants" onClick={closeMenu}>
                      Pants
                    </Link>
                  </li>
                  <li>
                    <Link to="/shoes" onClick={closeMenu}>
                      Shoes
                    </Link>
                  </li>
                  <li>
                    <Link to="/accessories" onClick={closeMenu}>
                      Accessories
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li>
           
              <Link to="/signup" onClick={closeMenu}>
                Sign Up
              </Link>
         
          </li>
          <li>
            
              <Link to="/signin" onClick={closeMenu}>
                Sign In
              </Link>
           
          </li>
          {/* Add more nav links as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
