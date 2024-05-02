
import './bookingcard.css';

function BookingCard({ event }) {

    console.log(event, 'BookingCard' )
  return (
    <>
        <div className='booking__card'>
            <h2 className='event-title'>{event.name}</h2>
            <p className='event-location'>@{event.where}</p>
            <p className='event-date-and-time'>{event.when.date} {event.when.from} - {event.when.to}</p>
            {/* <p className='event-time'>{event.when.from} - {event.when.to}</p> */}
        </div>
        <div className='amount'>
            <p className='total-amount'>{event.price}</p>
            <p className='minus'>-</p>
            <p className='total'></p>
            <p className='plus'>+</p>
        </div>
    </>
  );
}

export default BookingCard;