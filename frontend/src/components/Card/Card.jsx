import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

import './Card.css'

const Card = (props) => {
  const [cart, setCart] = useState([]);

  const handleOnClick = () => {
    toast.success('Item Added !');
    const item = { name: props.name, price: props.newPrice, img: props.imgSrc };
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setCart(cartItems);
  };

  return (
    <div className='' key={props.name}>
        <span className='card-title'>{props.name}</span>
        <hr />
        <img src={props.imgSrc} alt="" />
        <ul style={{marginTop: "0"}}>
        {props.descriptions.map((description, index) => {
            return <li key={index}>{description}</li>;
        })}
        </ul>
        <span className='left'><img width={25} src="https://cdn-icons-png.flaticon.com/512/9329/9329031.png" alt="" />{props.newPrice}</span>
        <span onClick={handleOnClick} className='right'><img width={35} src="https://cdn-icons-png.flaticon.com/512/8371/8371357.png" alt="" /></span>
        <Toaster/>
    </div>
  )
}

export default Card
