import React  from 'react';
import { Link } from 'react-router-dom';

const FloatingCartIcon = () => {
   

  return (
    <div className="floating-cart-icon">
      <Link to="/cart">
        <img src={require('../images/B5.jpg')} alt="Cart Icon" />
      </Link>
    </div>
  );
};

export default FloatingCartIcon;
