import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Summer Dress',
      price: 39.99,
      image: 'https://img.fruugo.com/product/7/25/359425257_max.jpg',
    },
    {
      id: 2,
      name: 'Casual T-Shirt',
      price: 19.99,
      image: 'https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/MAT0653/1-800x800.jpg',
    },
    // Add more products as needed
  ];

  return (
    <div>
      <center>
      <h1>Welcome to Our Clothing Store!</h1>
      </center>
      <img className='banner' src={require('../images/B1.png')} alt=""/>
      <section>
        <center>
        <h1>Featured Products</h1>
        </center>
        <div className="product-list">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>${product.price.toFixed(2)}</p>
              
            </div>
          ))}
        </div>
      </section>

      
      {/* About Us Section */}
      <center>
      <section>
        <h1>About Us</h1>
        <div className='about'>
        <img  src={require('../images/Tribal.png')} alt=""/>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel arcu et nulla aliquam
          eleifend. Quisque eget vestibulum ligula. Nunc scelerisque felis et velit facilisis, eu
          tincidunt nisl volutpat.
        </p>
        {/* Add more content for the about us section */}
      </section>
      </center>

      {/* Category Links */}
      <section>
        <center><h1>Categories</h1></center>
        
        <ul className="category-list">
          <li>
            <Link to="/products/Dresses">Dresses</Link>
          </li>
          <li>
            <Link to="/products/Tops">Tops</Link>
          </li>
          <li>
            <Link to="/products/Pants">Pants</Link>
          </li>
          <li>
            <Link to="/products/Shoes">Shoes</Link>
          </li>
          <li>
            <Link to="/products/Accessories">Accessories</Link>
          </li>
          {/* Add more category links as needed */}
        </ul>
      </section>

      {/* Add more sections as needed */}
    </div>
  );
};

export default Home;
