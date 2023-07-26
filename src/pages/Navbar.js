import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/FloatingCartIcon.css';
const Navbar = ({ signedInUser, handleSignOut, cartItems  }) => {
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
            <Link to="/cart" onClick={closeMenu}>
              <div className="cart-icon">
                <i className="fas fa-shopping-cart"></i>
                {cartItems.length > 0 && (
                  <span className="cart-item-count">{cartItems.length}</span>
                )}
              </div>
              Cart
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
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
            {/* Conditionally render the user's name, Sign Out, or Sign In */}
            {signedInUser ? (
              <>
              <Link>
             
                Welcome back..
                {signedInUser.name}
                </Link>  
              </>
            ) : (
              <Link to="/signin" onClick={closeMenu}>
                Sign In
              </Link>
            )}
          </li>
          <li>
            {/* Conditionally render the user's image or Sign Up */}
            {signedInUser ? (
          
              <Link  onClick={handleSignOut}>
              Sign Out
            </Link>
            ) : (
              <Link to="/signup" onClick={closeMenu}>
                Sign Up
              </Link>
            )}

          </li>
        
          {/* Add more nav links as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
