
import './bookingcard.css';

import { useContext, useState } from 'react';
import { CartContext } from '../../store/CartContext';

function BookingCard({ event }) {

    const { addToCart } = useContext(CartContext);
    const [ticketCount, setTicketCount] = useState(1);

    const handleIncrease = () => {
        setTicketCount(prevCount => prevCount + 1);
    };

    const handleDecrease = () => {
        if (ticketCount > 1 ) {
            setTicketCount(prevCount => prevCount - 1);
        }
    };

    const handleAddToCart = () => {
        addToCart(event, ticketCount);
    }

    // console.log(event, 'BookingCard' )
    // console.log(event, ticketCount )
    // console.log(event, ticketCount, 'ticketCount' )
    console.log(event, handleAddToCart, 'handleAddToCart' )
    console.log(event, addToCart, 'addToCart' )
    console.log( handleAddToCart )
  return (
    <>
        <div className='booking__card'>
            <h2 className='event-title--sansita'>{event.name}</h2>
            <p className='event-date-and-time'>{event.when.date} {event.when.from} - {event.when.to}</p>
            <p className='event-location'>@{event.where}</p>
        </div>
        <div className='amount'>
            <div className='total-amount__wrapper'>
                <p className='total-amount'>{event.price * ticketCount} SEK</p>
            </div>
            <div className='minus__wrapper' onClick={handleDecrease}>
                <p className='minus'>-</p>
            </div>
            <div className='total__wrapper'>
                <p className='total'>{ticketCount}</p> 
            </div>
            <div className='plus__wrapper' onClick={handleIncrease} >  
                <p className='plus'>+</p>
            </div>
        </div>
            <button className='add-to-cart__btn'
                onClick={handleAddToCart}>Lägg i varukorg
            </button>
    </>
  );
}

export default BookingCard;
