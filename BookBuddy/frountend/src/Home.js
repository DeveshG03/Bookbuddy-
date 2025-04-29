import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const res = await axios.get('http://localhost:5000/books');
      setBooks(res.data);
    }
    fetchBooks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Books</h2>
      {books.map((book, index) => (
        <div key={index} style={{ margin: "10px 0", padding: "10px", border: "1px solid gray" }}>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          <p>Price: ₹{book.price}</p>
          <p>Seller: {book.sellerName} | Contact: {book.contact}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
