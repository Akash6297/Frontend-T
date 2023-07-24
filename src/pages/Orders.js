import React, { useState, useEffect } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch the orders data from the backend when the component mounts
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/orderfrom');
      if (!response.ok) {
        throw new Error('Error fetching orders.');
      }
      const ordersData = await response.json();
      setOrders(ordersData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="orders">
      <h2>Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              <strong>Name:</strong> {order.name} <br />
              <strong>Phone:</strong> {order.phone} <br />
              <strong>Address:</strong> {order.address}, {order.area}, {order.district}, {order.state}, {order.country} <br />
              <strong>Cash on Delivery:</strong> {order.isCashOnDelivery ? 'Yes' : 'No'} <br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
