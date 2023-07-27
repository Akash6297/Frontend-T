import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/FloatingCartIcon.css';
import { SlBag } from "react-icons/sl";
// import { SlArrowDown } from "react-icons/sl";
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
            <strong>Home</strong>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
             
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={closeMenu}>
            <strong>Products</strong>
            <SlBag />
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
              <strong>Cart</strong>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
              </Link>
          </li>
          <li>
            <div className="dropdown-container" onClick={toggleDropdown}>
              
                <strong>Categories</strong>
                {/* <SlArrowDown /> */}
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>
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
            <strong>Contact</strong>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            
            </Link>
          </li>
          <li>
            <Link to="/order" onClick={closeMenu}>
              <strong>Orders</strong>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z"/></svg>
            
              {/* <SlBag /> */}
              {/* Add an icon if desired */}
            </Link>
          </li>
          
        <li>
            {/* Conditionally render the user's name, Sign Out, or Sign In */}
            {signedInUser && signedInUser.name? (
              <>
              <Link>
                
                Welcome back..
                <strong>
                {signedInUser.name}
                </strong>
                </Link>  
              </>
            ) : (
              <Link to="/signin" onClick={closeMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                 {/* Sign In */}
              </Link>
            )}
          </li>
          <li>
            {/* Conditionally render the user's image or Sign Up */}
            {signedInUser && signedInUser.name? (
          
              <Link  onClick={handleSignOut}>
              <strong>Sign Out</strong>
            </Link>
            ) : (
              <Link to="/signup" onClick={closeMenu}>
                <strong>Sign Up</strong>
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
