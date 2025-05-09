import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://quickpick-backend-71975aa50baa.herokuapp.com/api/products') // ✅ Replace with your actual backend URL
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Available Products</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((item, idx) => (
          <li key={idx} style={{ marginBottom: '10px', fontSize: '18px' }}>
            🛒 {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
