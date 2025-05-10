
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import axios from 'axios';

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://quickpick-backend-71975aa50baa.herokuapp.com/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error("API Error:", err));
  }, []);

  return (
    <div>
      <h2>Shop</h2>
      <ul>
        {products.map(p => (
          <li key={p.id} style={{ marginBottom: '10px' }}>
            {p.name} - ${p.price}
            <button
              onClick={() => addToCart(p)}
              style={{ marginLeft: '10px', backgroundColor: '#f97316', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '6px' }}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
