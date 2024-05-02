
import './App.css'
// import ApiHandler from './apihandler/ApiHandler';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import LandingPage from './pages/landingPage/LandingPage.jsx';
import EventsPage from './pages/eventsPage/EventsPage.jsx';
import BookingPage from './pages/bookingPage/BookingPage.jsx';
import OrderPage from './pages/orderPage/OrderPage.jsx';
import TicketsPage from './pages/ticketsPage/TicketsPage.jsx';

function App( ) {

  const [events, setEvents] = useState([]);


  return (
    <div className='body__section'>
      <Routes>
        <Route path='/' element={ <LandingPage events={ events } useState={ useState }/>}/>
        <Route path='/eventpage' element={ <EventsPage  />} />
        <Route path='/bookingpage' element={ <BookingPage />} />
        <Route path='/orderpage' element={ <OrderPage /> } />
        <Route path='/ticketspage' element={ <TicketsPage /> } />
      </Routes>
    </div>
  )
}

export default App
