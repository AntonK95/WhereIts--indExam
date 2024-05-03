
import './bookingcard.css';

import { useState } from 'react';

function BookingCard({ event }) {

    const [ticketCount, setTicketCount] = useState(1);

    const handleIncrease = () => {
        setTicketCount(prevCount => prevCount + 1);
    };

    const handleDecrease = () => {
        if (ticketCount > 1 ) {
            setTicketCount(prevCount => prevCount - 1);
        }
    };

    console.log(event, 'BookingCard' )
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

    </>
  );
}

export default BookingCard;
