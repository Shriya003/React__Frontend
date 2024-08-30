import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import '../Style/FoodCard.css'; // Adjust the path according to your project structure

function FoodCard({ name, image, description, addToCart }) {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle adding the item to the cart and navigating to the cart page
  const handleAddToCart = () => {
    addToCart({ name, image, description }); // Add item to the cart
    navigate('/cart'); // Navigate to the cart page
  };

  return (
    <div className="food-card">
      <div className="food-card-info">
        <h3 className="food-card-title">{name}</h3>
        <p className="food-card-description">{description}</p>
      </div>
      <div className="food-card-image-container">
        <img src={image} alt={name} className="food-card-image" />
        {/* Call handleAddToCart when button is clicked */}
        <button className="food-card-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
