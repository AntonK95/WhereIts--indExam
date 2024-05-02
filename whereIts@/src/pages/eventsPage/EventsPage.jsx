

import { useState } from 'react';

import './eventspage.css';

import EventCard from '../../components/eventCard/EventCard';
import ApiHandler from '../../apihandler/ApiHandler';

function EventsPage() {

    const [events, setEvents] = useState([]);

  return (
    <div className='events__page'>
        <ApiHandler setEvents={ setEvents } />
        <EventCard events={ events } />
    </div>
  )
}

export default EventsPage;