
import React from 'react';

const Home = () => (
  <div style={{ textAlign: 'center' }}>
    <h1>Welcome to QuickPick!</h1>
    <p>Your go-to app for fast grocery delivery.</p>
    <a href="/products">
      <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#f97316', color: 'white', border: 'none', borderRadius: '8px' }}>
        Shop Now
      </button>
    </a>
  </div>
);

export default Home;
