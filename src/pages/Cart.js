import React from 'react';

const Cart = ({ cartItems, removeItem }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

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
                <span>{item.name}</span>
                <span className='cart-price'>${item.price.toFixed(2)}</span>
                <td></td>
                <td></td>
                <td></td>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <span>Total:</span>
            <span >${totalPrice.toFixed(2)}</span>
          </div>
          <button className="payment-button">Proceed to Payment</button>
        </>
      )}
    </div>
  );
};

export default Cart;
