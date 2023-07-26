import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import OrderForm from './OrderForm'; // Corrected import statement

const Cart = ({ cartItems,removeItem}) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.count, 0);

  // State variable to track the visibility of the popup form
  const [isFormVisible, setIsFormVisible] = useState(false);

  // State variable to track if the cart has been updated
  const [cartUpdated,setCartUpdated] = useState(false);

  const history = useHistory(); // Get the history object from react-router-dom

  // Function to handle form submission from the popup form
  const handleFormSubmit = (formData) => {
    // Process the form data, e.g., save it to the database or perform any required actions.
    // You can use this data to create an order, etc.
    window.alert('Order submitted successfully! Thank you for your purchase.');
    // After processing, redirect to the "Orders" page
    history.push('/');
  };

  // useEffect to show alert whenever cartItems change or cart is updated
  // useEffect(() => {
  //   if (cartItems.length > 0) {
  //     alert('Added to Shopping Cart !!');
  //   }
    
  // }, [cartItems,]);
  useEffect(() => {
    if (cartUpdated  > 0) {
      alert('Successfully Remove Your Item !!');
    }
  }, [cartUpdated, ]);

  // Function to handle remove item from cart
  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
    setCartUpdated(true);
  };

 
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>
                  <img className="cart-img" src={item.image} alt={item.name} />
                </span>
                <span>{item.name}</span>
                <span>Count: {item.count}</span>
                <span className="cart-price">${item.price.toFixed(2)}</span>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          {/* Show the popup form when the button is clicked */}
          <button className="payment-button" onClick={() => setIsFormVisible(true)}>
            Complete Your Order
          </button>
          {isFormVisible && (
            // Render the OrderForm component as a popup
            <div className="popup">
              <OrderForm onSubmit={handleFormSubmit} selectedProduct={cartItems} totalPrice={totalPrice} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
