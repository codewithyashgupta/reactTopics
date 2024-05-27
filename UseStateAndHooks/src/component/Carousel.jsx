// App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [featuredItems, setFeaturedItems] = useState([]);

  useEffect(() => {
    fetchFeaturedItems();
  }, []);

  const fetchFeaturedItems = async () => {
    try {
      const response = await fetch("https://dadamoni.com/api/frontend/item/featured-items?order_column=id&order_type=desc", {
        headers: {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          "x-api-key": "b6d68vy2-m7g5-20r0-5275-h103w73453q120",
          // Add other headers if needed
        }
      });
      const data = await response.json();
      setFeaturedItems(data.data);
    } catch (error) {
      console.error("Error fetching featured items:", error);
    }
  };

  return (
    <div className="App">
      <h1>Featured Items</h1>
      <div className="featured-items">
        {featuredItems.map(item => (
          <FeaturedItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const FeaturedItemCard = ({ item }) => {
  return (
    <div className="featured-item">
      <img src={item.cover} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>{item.currency_price}</p>
    </div>
  );
}

export default App;
