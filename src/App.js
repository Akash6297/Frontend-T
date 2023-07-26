import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SginInFrom';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Contact from './components/ContactForm'; 
import Reset from "./components/reset";
import OrderForm from './pages/OrderForm';
import './styles.css'; // Import the CSS file
import './css/Popup.css';
import './css/navbar.css';
import './css/Categories.css';
import './css/cart.css';
import './css/Products.css';
import './css/footer.css';
import './css/contactForm.css';
import './css/AuthPage.css';

import AuthPage from './pages/AuthPage';
const App = () => {
  const [signedInUser, setSignedInUser] = useState({});


    // Function to handle successful sign-in
    const handleSignInSuccess = (userData) => {
      setSignedInUser(userData);
  
      // Store the user data in local storage
      localStorage.setItem('signedInUser', JSON.stringify(userData));
  
      // Set a timer to automatically sign out the user after 5 minutes
      setTimeout(() => {
        handleSignOut();
      }, 15 * 60 * 1000); // 5 minutes (5 * 60 seconds * 1000 milliseconds)
    };

  const handleSignOut = () => {
    setSignedInUser(null);

    // Clear the user data from localStorage
    localStorage.removeItem('signedInUser');
  };

  useEffect(() => {
    // Check if the user is signed in (from local storage) when the app starts
    const storedUser = localStorage.getItem('signedInUser');
    if (storedUser) {
      setSignedInUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Router>
      <div>
      {/* <Navbar /> */}
      <Navbar signedInUser={signedInUser} handleSignOut={handleSignOut} />
      <div className="container"> {/* Add container class */}
        <Switch>
          <Route exact path="/" component={Home} />
         <Route path="/signin" component={SignInForm}>
          <AuthPage handleSignInSuccess={handleSignInSuccess} />
        </Route>
        <Route path="/signup" component={SignUpForm}>
          <AuthPage handleSignInSuccess={handleSignInSuccess} />
        </Route>
          <Route path="/reset" component={Reset } />
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/orderform" component={OrderForm} />
          <Route path="/products">
              <Products />
            </Route>
            <Route path="/categories" component={Categories} />
            <Route path="/cart">
              <Cart cartItems={[]} />
              </Route>
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
      </div>
    </Router>
  );
};

export default App;
