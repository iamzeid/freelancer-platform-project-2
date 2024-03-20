// OrderCountComponent.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrderDash() {
  const [completedOrdersCount, setCompletedOrdersCount] = useState(null);

  useEffect(() => {
    async function fetchCompletedOrdersCount() {
      try {
        const response = await axios.get('http://localhost:8800/api/orders/completed/count');
        setCompletedOrdersCount(response.data.count);
      } catch (error) {
        console.error('Error fetching completed orders count:', error);
        setCompletedOrdersCount(-1); 
      }
    }

    fetchCompletedOrdersCount();
  }, []);

  return (
    <div>
      <h2>Completed Orders Count</h2>
      {completedOrdersCount === null ? (
        <p>Loading...</p>
      ) : completedOrdersCount === -1 ? (
        <p>Error fetching data</p>
      ) : (
        <p>Total Completed Orders: {completedOrdersCount}</p>
      )}
    </div>
  );
}

export default OrderDash;
