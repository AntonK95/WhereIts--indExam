
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { EventContext } from "../../store/EventContext";
import BookingCard from "../../components/bookingCard/BookingCard";
import './bookingpage.css'


function BookingPage() {
  const { eventName } = useParams();
  const { events } = useContext(EventContext);
  const event = events.find(event => event.name === decodeURIComponent(eventName));
  
  console.log(events, 'Booking page')
  console.log(event, 'BookingPage')

  return (
    <div className="booking-page__container">
      <h2 className="page-title__sansita">Event</h2>
      <h3 className="score-text">You are about to score some tickets to</h3>
      {event && <BookingCard event={event} />}
    </div>
  )
}

export default BookingPage;