import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form>
        <span><label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required /></span>

        <span>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        </span>
        
        <span>
        <label htmlFor="message">Message:</label>
        <input type="text" id="email" name="email" required />
        </span>
       
        <button type="btnt">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
