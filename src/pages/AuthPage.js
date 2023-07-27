import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import '../css/AuthPage.css';
const AuthPage = ({ handleSignInSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    try {
      if (isSignUp) {
        await axios.post('https://trible-trands.onrender.com/api/signup', userData);
        alert('User registered successfully');
        history.push('/signin');
      } else {
        const response = await axios.post('https://trible-trands.onrender.com/api/signin', userData);
        const { user } = response.data;
        handleSignInSuccess(user); // Pass the user data to the App component
        alert('Sign in successful');
        history.push('/home');
      }
    } catch (error) {
      alert('An error occurred during authentication');
    }

    // Clear form fields after submission
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="auth-page">
        <div className="auth-container">
      <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      <form onSubmit={handleFormSubmit}>
        {isSignUp && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
        <p>{isSignUp ? 'Already have an Account?' : "Don't have an Account?"}</p>
        <Link to={isSignUp ? '/signin' : '/signup'} onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </Link>
        <a href="/reset">{isSignUp ? '' : "Forgot?"}</a>
      </form>
    </div>
    </div>
  );
};

export default AuthPage;
