import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import SellBook from './SellBook';

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", backgroundColor: "#eee" }}>
        <Link to="/">Home</Link> | <Link to="/sell">Sell Book</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sell" element={<SellBook />} />
      </Routes>
    </Router>
  );
}

export default App;
