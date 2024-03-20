import React from 'react';
import { useNavigate } from 'react-router-dom';

function Success(props) {
  const navigate = useNavigate();
  const userId = JSON.parse(localStorage.getItem("currentuser")).user;

  const handleGoToOrders = () => {
    navigate(`/orders/${userId}`); // Include userId as a route parameter
  };

  return (
    <div>
      <h2>Payment Successful!</h2>
      <p>Your payment was successful.</p>
      <button onClick={handleGoToOrders}>Go to Orders</button>
    </div>
  );
};

export default Success;
