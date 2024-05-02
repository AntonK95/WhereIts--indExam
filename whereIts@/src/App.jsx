
import './App.css'
// import ApiHandler from './apihandler/ApiHandler';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { EventContext, useEventStore } from './store/EventContext.jsx';


import LandingPage from './pages/landingPage/LandingPage.jsx';
import EventsPage from './pages/eventsPage/EventsPage.jsx';
import BookingPage from './pages/bookingPage/BookingPage.jsx';
import OrderPage from './pages/orderPage/OrderPage.jsx';
import TicketsPage from './pages/ticketsPage/TicketsPage.jsx';

function App( ) {

  const eventStore = useEventStore(); // Instans av useEventStore
  // const [events, setEvents] = useState([]);


  return (
    <div className='body__section'>
      <EventContext.Provider value={eventStore}>
        <Routes>
          <Route path='/' element={ <LandingPage />}/>
          <Route path='/eventpage' element={ <EventsPage  />} />
          <Route path='/bookingpage/:eventName' element={ <BookingPage  />} />
          <Route path='/orderpage' element={ <OrderPage /> } />
          <Route path='/ticketspage' element={ <TicketsPage /> } />
        </Routes>
      </EventContext.Provider>
    </div>
  )
}

export default App
