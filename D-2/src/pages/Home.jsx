import React from 'react';
import img from '../image/shoes.jpg';
import img2 from '../image/watch.jpg';
import img3 from '../image/note.webp';
import img4 from '../image/pencil.webp';
import img5 from '../image/phone.webp';
import './Home.css';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  const products = [
    { name:"Shoes",price: 300, img: img },
    { name:"Watch",price: 1000, img: img2 },
    {name:"Note",price:50,img:img3},
    {name:"pencil",price:100,img:img4},
    {name:"Phone",price:10000,img:img5},
  ];
  const addCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("Cart")) || [];
    cart.push(product);
    localStorage.setItem("Cart", JSON.stringify(cart));
    navigate('/Cart');
  };
  return (
    <div className="header">
      {products.map((item, index) => (
        <div key={index}>
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <h3>Price: {item.price}</h3>
          <h3>Stock: 20</h3>
          <button onClick={() => addCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
export default Home;