import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import OrderForm from './OrderForm'; // Corrected import statement

const Cart = ({ cartItems, removeItem }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.count, 0);

  // State variable to track the visibility of the popup form
  const [isFormVisible, setIsFormVisible] = useState(false);

  const history = useHistory(); // Get the history object from react-router-dom

  // Function to handle form submission from the popup form
  const handleFormSubmit = (formData) => {
    // Process the form data, e.g., save it to the database or perform any required actions.
    // You can use this data to create an order, etc.

    // After processing, redirect to the "Orders" page
    history.push('/');
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
                <td></td>
                <td></td>
                <td></td>
                <button onClick={() => removeItem(item.id)}>Remove</button>
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
