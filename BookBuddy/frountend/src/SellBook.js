import React, { useState } from 'react';
import axios from 'axios';

function SellBook() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    sellerName: '',
    contact: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/books', formData);
    alert('Book uploaded successfully!');
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sell Your Book</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} required /><br /><br />
        <textarea name="description" placeholder="Description" onChange={handleChange} required /><br /><br />
        <input name="price" type="number" placeholder="Price" onChange={handleChange} required /><br /><br />
        <input name="sellerName" placeholder="Your Name" onChange={handleChange} required /><br /><br />
        <input name="contact" placeholder="Contact Info" onChange={handleChange} required /><br /><br />
        <button type="submit">Upload Book</button>
      </form>
    </div>
  );
}

export default SellBook;
