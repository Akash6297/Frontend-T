import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await axios.post('http://localhost:5000/api/contact', { name, email, message });
      setIsSent(true);
      // Clear form fields after successful submission
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      {isSent ? (
        <p className="success-message">Message sent successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
