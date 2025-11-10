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
  const clearCart = () => {
    localStorage.removeItem("Cart");  
    setCartItems([]);
  };
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)
  return (
    <div>
      <h2>Your Cart</h2>
        <>
          <div>
            {cartItems.map((item, index) => (
              <div key={index}>
                <img src={item.img} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <h3 >Total: ${totalPrice}</h3>
         <button onClick={change}>Gpay</button>  
         <button onClick={change}>Phonepay</button>
         <button onClick={change}>Cash</button><br />
          <button onClick={clearCart} style={{background:'red'}}>Clear</button>
        </>
    </div>
  );
}
export default Cart;