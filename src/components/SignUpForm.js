import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/signup', { email, password });
      alert('User registered successfully');
    } catch (error) {
      alert('An error occurred during registration');
    }

    // Clear form fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
