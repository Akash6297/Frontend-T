import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const products = [
    { id: 1, name: 'Summer Dress', price: 39.99, image: 'https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/MAT0653/1-800x800.jpg', category: 'Dresses' },
    { id: 2, name: 'Casual T-Shirt', price: 19.99, image: 'https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/MAT0653/1-800x800.jpg', category: 'Tops' },
    { id: 3, name: 'Jeans', price: 49.99, image: 'https://example.com/jeans.jpg', category: 'Pants' },
    { id: 4, name: 'Sneakers', price: 59.99, image: 'https://example.com/sneakers.jpg', category: 'Shoes' },
    { id: 5, name: 'Bracelet', price: 9.99, image: 'https://example.com/bracelet.jpg', category: 'Accessories' },
    // Add more products with different categories as needed
  ];

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div>
      <h2>Categories</h2>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/products/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
