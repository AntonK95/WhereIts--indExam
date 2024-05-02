

import './eventcard.css';

function EventCard( { events } ) {
  return (
    <>
        <h1 className='page-title'>Events</h1>
        <input type="text" className='input-field'/>
        <div className="event__card">
            <ul className='grid-card'>
            {events.map(event => (
            <li key={event.name} className='event-item'>
                <div className='date-left'>
                    <p className='event-date'>{event.when.date} </p>
                </div>
                <div className='desc-middle'>
                    <p className='event-title'>{event.name}</p>
                    <p className='event-location'>{event.where}</p>
                    <p className='event-time'>{event.when.from} - {event.when.to}</p>
                {/* <hr className='border'/> */}
                </div>
                <div className='price-right'>
                    <p className='event-price'>{event.price} SEK</p>
                {/* <hr className='border'/> */}
                </div>
            </li>
            ))}
        </ul>
        </div>
    </>
  )
}

export default EventCard;