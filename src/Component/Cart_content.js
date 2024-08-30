import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Cart_content.css';
 
const Cart_content = ({ cartItems = [] }) => { // Set default value to avoid undefined
  const navigate = useNavigate();
 
  const handleButtonClick = () => {
    navigate('/');
  };
 
  const imageUrls = 'https://th.bing.com/th/id/OIP.xtsx5oWiAk5zfU9VjFTNOQHaG3?w=197&h=183&c=7&r=0&o=5&pid=1.7';
 
  return (
<div className='container'>
      {cartItems && cartItems.length === 0 ? (
<>
<div className='img_container'>
<img src={imageUrls} alt="cart empty" height={250} className='image' />
</div>
<h3>Your Cart is empty</h3>
<div>You can go to the home page to view more restaurants</div>
<button className='check' onClick={handleButtonClick}>SEE RESTAURANTS NEAR YOU</button>
</>
      ) : (
<div className='order-summary'>
<h3>Order Summary</h3>
<ul>
            {cartItems.map((item, index) => (
<li key={index}>{item.name} - {item.description}</li>
            ))}
</ul>
</div>
      )}
</div>
  );
};
 
export default Cart_content;