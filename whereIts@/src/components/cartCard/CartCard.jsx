
import './cartcard.css'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../store/CartContext';

function CartCard({ item })  {
//   const {cartItems} = useContext(CartContext);

    
    const { addToCart, removeFromCart } = useContext(CartContext);

    const handleIncrease = () => {
        addToCart(item, item.quantity + 1);
    };

    const handleDecrease = () => {
        if (item.quantity > 1 ) {
            addToCart(item, item.quantity - 1);
        } else {
            removeFromCart(item.event);
        }
    };

    // const handleRemoveFromCart = () => {
    //     removeFromCart(item.event);
    // }

    const handleAddToCart = () => {
        addToCart(item, ticketCount);
    }
  
    return (
    <section className='cart-card__wrapper'>
        <section className='cart-card__event'>
        <p>{item.event.name}</p>
        <p className='event-date-and-time'>{item.event.when.date} {item.event.when.from} - {item.event.when.to}</p>
        {/* <p>{item.event.quantity}</p> */}
        </section>
        <section className='cart-card__buttons'>
                <div className='minus__wrapper--left' onClick={handleDecrease}>
                    <p className='minus minus--left'>-</p>
                </div>
                <div className='total__wrapper'>
                    <p className='total'>{item.quantity}</p> 
                </div>
                <div className='plus__wrapper--right ' onClick={handleIncrease} >  
                    <p className='plus plus--right'>+</p>
                </div>
            </section>
    </section>
  )
}

export default CartCard;