
import './App.css'
// import ApiHandler from './apihandler/ApiHandler';
import { Route, Routes } from 'react-router-dom';
// import { useState } from 'react';
import { EventContext, useEventStore } from './store/EventContext.jsx';


import LandingPage from './pages/landingPage/LandingPage.jsx';
import EventsPage from './pages/eventsPage/EventsPage.jsx';
import BookingPage from './pages/bookingPage/BookingPage.jsx';
import TicketsPage from './pages/ticketsPage/TicketsPage.jsx';
import CartPage from './pages/cartPage/CartPage.jsx';
import { CartProvider } from './store/CartContext.jsx';
import Navigation from './components/navigation/Navigation.jsx';

function App( ) {

  const eventStore = useEventStore(); // Instans av useEventStore
  // const [events, setEvents] = useState([]);


  return (
    <div className='body__section'>
      <EventContext.Provider value={eventStore}>
        <CartProvider>
          <Routes>
            <Route path='/' element={ <LandingPage />}/>
            <Route path='/eventpage' element={ <EventsPage  />} />
            <Route path='/bookingpage/:eventName' element={ <BookingPage  />} />
            <Route path='/cartpage' element={<CartPage />} />
            <Route path='/ticketspage' element={ <TicketsPage /> } />
          </Routes>
          <Navigation />
        </CartProvider>
      </EventContext.Provider>
    </div>
  )
}

export default App
