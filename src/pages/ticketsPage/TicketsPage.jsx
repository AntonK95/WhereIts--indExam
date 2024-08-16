
import TicketCard from '../../components/ticketCard/TicketCard';
import './ticketspage.css';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function TicketsPage() {

  const location = useLocation();
  const cartItems = location.state?.cartItems || [];
  // console.log(cartItems, 'Ticketpage')

    // Hämta ticketItems från localStorage när komponenten renderas
    const [ticketItems, setTicketItems] = useState([]);

    useEffect(() => {
      // Hämta ticketItems från localStorage
      const savedTicketItems = localStorage.getItem('ticketItems');
      if (savedTicketItems) {
        setTicketItems(JSON.parse(savedTicketItems));
      } else {
        // Om ticketItems inte finns i localStorage, spara cartItems
        localStorage.setItem('ticketItems', JSON.stringify(cartItems));
        setTicketItems(cartItems);
        // console.log(ticketItems, 'TicketItems');
      }
    }, []); // Uppdatera när cartItems ändras

  return (
    <section className="tickets-page__container">
      <article>
        
        {ticketItems.map((item, index) => (
          <TicketCard 
          key={index} 
          index={index} 
          item={item} 
          quantity={item.quantity} 
          section='A' />
        ))}
      </article>
    
    </section>
  )
}

export default TicketsPage;