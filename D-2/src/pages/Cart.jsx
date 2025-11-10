import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Buynow'
function Cart() {
  const navigate=useNavigate();
  function change(){
    navigate('/Buynow')
  }
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("Cart")) || [];
    setCartItems(savedCart);
  }, []);
  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("Cart", JSON.stringify(updatedCart));
  };
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)
  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <button onClick={() => removeItem(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <h3 className="total">Total: ${totalPrice}</h3>
         <button onClick={change}>Gpay</button>  
         <button onClick={change}>Phonepay</button>
         <button onClick={change}>Cash</button>
        </>
      )}
    </div>
  );
}
export default Cart;