import React, { useState } from 'react'
import './catalog.css';
import Cart from './cart';

const Catalog = () => {
var CurrencyFormat = require('react-currency-format');
const addToCart = (key)=>{
    const newCart = [...cartItems];
    const newItem= items.filter(nc=>nc.key===key);
    const newItem2 = newItem[0];
    const price = newItem2.price;
    setTotal(total+price);
    newCart.push(newItem2);
    setCart(newCart);
    
} 

const deleteFromCart=(key)=>{
    const oldCart = [...cartItems];
    const newCart = oldCart.filter(cart=>cart.key!==key);
    setCart(newCart);
    const deletedItem = oldCart.filter(cart=>cart.key===key);
    const price= deletedItem[0].price * deletedItem.length;
    setTotal(total- price);
}
const[cartItems, setCart] = useState([]);

const[total, setTotal] =useState(0);

const items = [{key:1, brand:"B1", model: "M1", price: 13232}, {key:2, brand:"Royal Enfield", model: "Speed", price: 318222}, {key:3, brand:"B3", model: "Specs", price: 22112},];
  return (
    <>
    <div className="catalog">
        {items.map(item=>{return(
            <>
                <div className='item' key={item.key}>
                    <h4>{item.brand.toUpperCase()}<br/></h4><p>{item.model}<br/><CurrencyFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'₹'} /></p>
                    <button onClick={()=>addToCart(item.key)}>ADD TO CART</button>
                </div>
            </>
        )})}
    </div>
    <Cart cartItems={cartItems} total={total} deleteFromCart={deleteFromCart}/>
    </>
  )
}

export default Catalog