import React, { useState } from 'react';
import Cart from './Cart';
import { useParams } from 'react-router-dom';

const Products = () => {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    { id: 1, name: 'Summer Dress', price: 39.99, image: 'https://img.fruugo.com/product/7/25/359425257_max.jpg', category: 'Dresses' },
    { id: 2, name: 'Casual T-Shirt', price: 19.99, image: 'https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/MAT0653/1-800x800.jpg', category: 'Tops' },
    { id: 3, name: 'Jeans', price: 49.99, image: 'https://assets.ajio.com/medias/sys_master/root/20230109/t8cR/63bc1c81f997dd708ef507d5/-473Wx593H-443005043-tintblue-MODEL.jpg', category: 'Pants' },
    { id: 4, name: 'Sneakers', price: 59.99, image: 'https://images.meesho.com/images/products/119544768/7pyu4_512.jpg', category: 'Shoes' },
    { id: 5, name: 'Bracelet', price: 9.99, image: 'https://www.byrdie.com/thmb/7617CF4EmSNEM2RIX8KcDmrcAvE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/283634935_541838164011757_6757896553243126405_n-be7a8909dd544b2fb494df457bd71a04.jpg', category: 'Accessories' },
    { id: 6, name: 'Summer Dress', price: 39.99, image: 'https://img.fruugo.com/product/7/25/359425257_max.jpg', category: 'Dresses' },
    { id: 7, name: 'Casual T-Shirt', price: 19.99, image: 'https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/MAT0653/1-800x800.jpg', category: 'Tops' },
    { id: 8, name: 'Jeans', price: 49.99, image: 'https://assets.ajio.com/medias/sys_master/root/20230109/t8cR/63bc1c81f997dd708ef507d5/-473Wx593H-443005043-tintblue-MODEL.jpg', category: 'Pants' },
    { id: 9, name: 'Sneakers', price: 59.99, image: 'https://images.meesho.com/images/products/119544768/7pyu4_512.jpg', category: 'Shoes' },
    { id: 10, name: 'Bracelet', price: 9.99, image: 'https://www.byrdie.com/thmb/7617CF4EmSNEM2RIX8KcDmrcAvE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/283634935_541838164011757_6757896553243126405_n-be7a8909dd544b2fb494df457bd71a04.jpg', category: 'Accessories' },
    // Add more products with different categories as needed
  ];

  const { category } = useParams();

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
