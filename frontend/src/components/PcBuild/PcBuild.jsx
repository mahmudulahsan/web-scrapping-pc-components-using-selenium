import React, {useEffect, useState} from 'react'
import Navbar from '../Navbar/Navbar'

import './PcBuild.css'

const PcBuild = () => {
    const [cartItems, setCartItems] = useState([]);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(items);
        let sum = 0;
        for(let i = 0; i < items.length; i++){
            const priceString = items[i].price;
            const price = parseFloat(priceString.replace(/[^\d.-]/g, ''));
            sum += price;
        }
        setPrice(sum)
    }, []);

    const handleDeleteItem = (index) => {
        // Create a copy of the cartItems array
        const updatedCartItems = [...cartItems];
        // Remove the item at the specified index
        updatedCartItems.splice(index, 1);
        // Update the cartItems state and the localStorage
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        // Recalculate the total price
        let sum = 0;
        for(let i = 0; i < updatedCartItems.length; i++){
            const priceString = updatedCartItems[i].price;
            const price = parseFloat(priceString.replace(/[^\d.-]/g, ''));
            sum += price;
        }
        setPrice(sum);
    }

  return (
    <>
        <Navbar/>
        <div className='container'>
            <div>
                <span style={{fontSize: "50px"}}>My Dream PC Items</span>
                <img width={250} src="https://cdn-icons-png.flaticon.com/512/2645/2645216.png" alt="" />
                
                
                {cartItems.length > 0 ? (
                    <>
                        <ul>
                        {cartItems.map((item, index) => (
                            <>
                                <li className='pc-build-list' key={index}>
                                <b>{index+1} . </b>
                                <span>{item.name}</span> - 
                                <span style={{color: "#2c6e49"}}>{item.price}</span>
                                </li>
                                <img style={{marginLeft: "50px", marginTop: "10px"}} height={135} src={item.img} alt="" />
                                <button className='delete-btn' onClick={() => handleDeleteItem(index)}>Remove</button>
                                <hr style={{border: "2px dashed"}} />
                                <br />
                            </>
                        ))}
                        </ul>
                        <span style={{color: "#274c77", fontSize:"35px", paddingBottom:"85px"}}>Total Price : {price}</span>
                    </>
                ) : (
                    <p style={{fontSize:"18px"}}>No items added yet</p>
                )}
            </div>
        </div>
    </>
    
  )
}

export default PcBuild;
