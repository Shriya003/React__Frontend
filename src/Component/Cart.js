import React from 'react';
import Cart_nav from './Cart_nav';
import Cart_content from './Cart_content';
 
const Cart = ({cartItems}) => {

  // const [cartItems ,setCartItem] = useState([])

  return (
<>
<Cart_nav cartItems={cartItems} />
<Cart_content cartItems={cartItems} />
</>
  );
};
 
export default Cart;