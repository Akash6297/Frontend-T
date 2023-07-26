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
  const [cartItems, setCartItems] = useState([]);

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

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the item already exists in the cart
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // If the item already exists, increase the count by 1
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        // If the item is not in the cart, add it with count 1
        return [...prevItems, { ...product, count: 1 }];
      }
    });
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => {
      // Check if the item exists in the cart
      const existingItem = prevItems.find((item) => item.id === itemId);

      if (existingItem) {
        // If the item count is more than 1, decrease the count by 1
        if (existingItem.count > 1) {
          return prevItems.map((item) =>
            item.id === itemId ? { ...item, count: item.count - 1 } : item
          );
        } else {
          // If the item count is 1 or less, remove the item from the cart
          return prevItems.filter((item) => item.id !== itemId);
        }
      } else {
        return prevItems;
      }
    });
  };

  return (
    <Router>
      <div>
      {/* <Navbar /> */}
      <Navbar signedInUser={signedInUser} 
      cartItems={cartItems} // Pass cartItems to Navbar
      handleSignOut={handleSignOut} />
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
              {/* Pass cartItems, handleAddToCart, and setCartItems to the Products page */}
              <Products
                cartItems={cartItems}
                handleAddToCart={handleAddToCart}
                setCartItems={setCartItems}
              />
            </Route>
            <Route path="/categories" component={Categories} />
            <Route path="/cart">
              {/* Pass cartItems and the removeItem function to the Cart page */}
              <Cart cartItems={cartItems} removeItem={handleRemoveItem} />
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
