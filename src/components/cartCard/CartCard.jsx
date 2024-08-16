
import './cartcard.css'
import React, { useContext } from 'react'
import { CartContext } from '../../store/CartContext';

function CartCard({ item })  {

// console.log(item, 'objekt mottaget från BookingCard');
// console.log(item.event, 'eventobjekt från item');


// Kontrollera om item.event är definerat innan försök för att komma åt egenskaper
if(!item.event) {
        return null;
    }
    
    const { addToCart, removeFromCart } = useContext(CartContext);

    const handleIncrease = () => {
        addToCart(item.event, item.quantity + 1);
    };

    const handleDecrease = () => {
        if (item.quantity > 1 ) {
            addToCart(item.event, item.quantity - 1);
        } else {
            removeFromCart(item.event);
        }
    };
  
    return (
    <section className='cart-card__wrapper'>
        <section className='cart-card__event'>
        <p className='cart-card__name'>{item.event.name}</p>
        { item.event.when && (
            <p className='event-date-and-time'>{item.event.when.date} {item.event.when.from} - {item.event.when.to}</p>
        )}
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