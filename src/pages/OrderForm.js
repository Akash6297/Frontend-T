import React, { useState } from 'react';

const OrderForm = ({ onSubmit, selectedProduct, totalPrice }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [isCashOnDelivery, setIsCashOnDelivery] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
       // Create an array to store product names and their counts
       const products = selectedProduct.map((item) => ({
        name: item.name,
        count: item.count,
      }));
    const orderData = {
      name,
      email,
      phone,
      address,
      country,
      state,
      district,
      selectedProduct,
      products,
      count: selectedProduct.reduce((total, item) => total + item.count, 0),
      totalPrice,
      isCashOnDelivery,
    };

    try {
      const response = await fetch('https://trible-trands.onrender.com/api/orderform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('Error submitting order form.');
      }

      onSubmit(orderData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="order-form">
      <h2>Order Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone no"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="District"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          required
        />
        <label>
          <input
            type="checkbox"
            checked={isCashOnDelivery}
            onChange={(e) => setIsCashOnDelivery(e.target.checked)}
          />
          Cash on Delivery
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OrderForm;
