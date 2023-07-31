// OrderList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';



const OrderPage = ({ signedInUser }) => {
    const [orders, setOrders] = useState([]);
  
    useEffect(() => {
      if (signedInUser) {
        // Make an API call to fetch orders for the signed-in user's email ID
        axios.get(`https://trible-trands.onrender.com/api/orders/${signedInUser.email}`)
        // axios.get(`http://localhost:5000/api/orders/${signedInUser.email}`)
          .then((response) => {
            setOrders(response.data);
          })
          .catch((error) => {
            console.error('Error fetching orders:', error);
          });
      }
    }, [signedInUser]);

    const getStatusIcon = (status, currentStatus) => {
      if (status === currentStatus) {
        // return <span>&#10003;</span>; // Tick mark icon
        return <span style={{ color: 'green' }}>&#10003;</span>;

      } else {
        return null;
      }
    };

  return (
    <div className="order-list"> {/* Add the "order-list" class */}
      <h2>Order Details</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              <p><strong className='order'>Name:</strong> <strong>{order.name}</strong></p>
              <p><strong className='order'>Email: </strong> <strong>{order.email}</strong></p>
              <p><strong className='order'>Phone:</strong> <strong>{order.phone}</strong> </p>
              <p><strong className='order'>Address: </strong>{order.address}</p>
              <h3>Products:</h3>
              <ul>
                {order.products.map((product, index) => (
                  <li key={index}>
                    <p>{product.name} - Quantity: {product.count}</p>
                  </li>
                ))}
              </ul>
              
              <p><strong className='order'>Total Price:</strong> <strong> ${order.totalPrice.toFixed(2)}</strong></p>
              <p><strong className='order'>Payment Method:</strong> <strong> {order.isCashOnDelivery ? 'Cash on Delivery' : 'Online Payment'}</strong></p>
              <div className="order-status-bar">
              <h3>Order Status:</h3>
                <span>Order Confirmed--{getStatusIcon('Order-Confirmed', order.status)}--</span>
                <span>Processing--{getStatusIcon('Processing', order.status)}--</span>
                <span>Shipped--{getStatusIcon('Shipped', order.status)}--</span>
                <span>Delivered--{getStatusIcon('Delivered', order.status)}--</span>
              </div>
              
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderPage;
