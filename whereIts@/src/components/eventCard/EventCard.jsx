

import './eventcard.css';
import { Link } from 'react-router-dom';


function EventCard( { events } ) {

    console.log(events, 'EventCard')
  return (
    <>
        <h1 className='page-title page-title__sansita'>Events</h1>
        <input type="text" className='input-field'/>
        <div className="event__card">
            <ul className='grid-card'>
            {events.map(event => (
                <li key={event.name}>
                <Link className='link event-item' to={`/bookingpage/${encodeURIComponent(event.name)}`}>
                    <div className='date-left'>
                        <p className='event-date'>{event.when.date} </p>
                    </div>
                    <div className='desc-middle'>
                        <p className='event-title'>{event.name}</p>
                        <p className='event-location'>{event.where}</p>
                        <p className='event-time'>{event.when.from} - {event.when.to}</p>
                    </div>
                    <div className='price-right'>
                        <p className='event-price'>{event.price} SEK</p>
                    </div>
                </Link>
            </li>
            ))}
        </ul>
        </div>
    </>
  )
}

export default EventCard;