import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link from React Router

const Home = () => (
  <div style={{ textAlign: 'center' }}>
    <h1>Welcome to QuickPick!</h1>
    <p>Your go-to app for fast grocery delivery.</p>

    {/* ✅ Use Link instead of <a href> */}
    <Link to="/products">
      <button style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#f97316',
        color: 'white',
        border: 'none',
        borderRadius: '8px'
      }}>
        Shop Now
      </button>
    </Link>
  </div>
);

export default Home;
