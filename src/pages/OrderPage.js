// OrderList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';



const OrderPage = ({ signedInUser }) => {
    const [orders, setOrders] = useState([]);
  
    useEffect(() => {
      if (signedInUser) {
        // Make an API call to fetch orders for the signed-in user's email ID
        axios.get(`https://trible-trands.onrender.com/api/orders/${signedInUser.email}`)
          .then((response) => {
            setOrders(response.data);
          })
          .catch((error) => {
            console.error('Error fetching orders:', error);
          });
      }
    }, [signedInUser]);
  return (
    <div className="order-list"> {/* Add the "order-list" class */}
      <h2>Order Details</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
             
              <p><strong>Name: {order.name}</strong></p>
              <p><strong>Email: {order.email}</strong></p>
              <p><strong>Phone:</strong> {order.phone}</p>
              <p><strong>Address: </strong>{order.address}</p>
              <h3>Products:</h3>
              <ul>
                {order.products.map((product, index) => (
                  <li key={index}>
                    <p>{product.name} - Quantity: {product.count}</p>
                  </li>
                ))}
              </ul>
              
              <p><strong>Total Price: ${order.totalPrice.toFixed(2)}</strong></p>
              <p><strong>Payment Method: {order.isCashOnDelivery ? 'Cash on Delivery' : 'Online Payment'}</strong></p>

              
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderPage;
