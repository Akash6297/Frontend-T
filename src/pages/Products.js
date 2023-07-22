// Product.js
import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import { useParams } from 'react-router-dom';

const Products = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://trible-trands.onrender.com/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const filteredProducts = category ? products.filter((product) => product.category === category) : products;
  
  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div>
    <h2>Products</h2>
    <div className="product-list">
  {filteredProducts.map((product) => (
     <div key={product.id} className="product-item">
       <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
           <p>${product.price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
        ))}
     </div>

     <br></br>
    <br></br>
     <br></br>
      <Cart cartItems={cartItems} removeItem={handleRemoveItem} /> {/* Pass removeItem as a prop */}
    </div>
  );
};

export default Products;
