
import './bookingcard.css';

function BookingCard({ event }) {

    console.log(event, 'BookingCard' )
  return (
    <>
        <div className='booking__card'>
            <h2 className='event-title--sansita'>{event.name}</h2>
            <p className='event-date-and-time'>{event.when.date} {event.when.from} - {event.when.to}</p>
            <p className='event-location'>@{event.where}</p>
            {/* <p className='event-time'>{event.when.from} - {event.when.to}</p> */}
        </div>
        <div className='amount'>
            <div className='total-amount__wrapper'>
                <p className='total-amount'>{event.price}</p>
            </div>
            <div className='minus__wrapper'>
                <p className='minus'>-</p>
            </div>
            <div className='minus__wrapper'>
                <p className='total'>1</p>
            </div>
            <div className='minus__wrapper'>
                <p className='plus'>+</p>
            </div>
        </div>
    </>
  );
}

export default BookingCard;