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
    { id: 3, name: 'Jeans', price: 49.99, image: 'https://assets.ajio.com/medias/sys_master/root/20230109/t8cR/63bc1c81f997dd708ef507d5/-473Wx593H-443005043-tintblue-MODEL.jpg', category: 'Pants' },
    { id: 4, name: 'Sneakers', price: 59.99, image: 'https://images.meesho.com/images/products/119544768/7pyu4_512.jpg', category: 'Shoes' },
    { id: 5, name: 'Bracelet', price: 9.99, image: 'https://www.byrdie.com/thmb/7617CF4EmSNEM2RIX8KcDmrcAvE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/283634935_541838164011757_6757896553243126405_n-be7a8909dd544b2fb494df457bd71a04.jpg', category: 'Accessories' },
    // Add more products as needed
  ];

  return (
    <div>
      <center>
      <h1>Welcome to Our Clothing Store!</h1>
      </center>
      <img className='banner' src={require('../images/B1.png')} alt=""/>
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
        <p>
        Welcome to Tribal Trends, your ultimate destination for stylish and unique clothing that celebrates the essence of tribal cultures and embraces the latest fashion trends.
        </p>
        <p>
        At Tribal Trends, we believe that clothing is not just about what you wear; it's a reflection of your personality, your story, and your connection to the world. Our curated collection is inspired by the rich heritage of tribal communities, infusing traditional craftsmanship with contemporary designs. Each piece we offer carries a story, a narrative of the vibrant cultures that have inspired us.
        </p>
        <p>
        Our mission is to bring the spirit of tribal artistry to the modern world, offering you a diverse range of clothing that is not only fashionable but also carries a deeper significance. Every garment in our store is thoughtfully selected, crafted with care, and ethically sourced to ensure that your fashion choices contribute positively to the world.
        </p>
        <p>
        At Tribal Trends, we are more than just a clothing store; we are a community of fashion enthusiasts who value creativity, authenticity, and inclusivity. We celebrate diversity and believe that fashion should be an expression of individuality, allowing you to embrace your unique style and make a statement.
        </p>
        <img  className='banner' src={require('../images/B3.png')} alt=""/>
        <p>
        Whether you're looking for bohemian-inspired dresses, vibrant prints, intricately handwoven textiles, or contemporary streetwear, our diverse collection has something for everyone. From casual wear to elegant ensembles, we strive to cater to every taste and occasion, ensuring that you always find the perfect outfit to express yourself.
        </p>
        <p>
        Our team is dedicated to providing you with exceptional customer service, making your shopping experience with us seamless and enjoyable. We take pride in offering high-quality products and keeping up with the latest fashion trends, so you can stay ahead in the style game.
        </p>
        <p>
        Thank you for choosing Tribal Trends as your fashion destination. Join us on this journey of celebrating culture, embracing diversity, and setting new trends. Step into the world of Tribal Trends and discover a world of fashion with a soul.
        </p>
        
        </div>
        
        {/* Add more content for the about us section */}
      </section>
      </center>

      

      {/* Add more sections as needed */}
    </div>
  );
};

export default Home;
