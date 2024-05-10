
import TicketCard from '../../components/ticketCard/TicketCard';
import './ticketspage.css';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function TicketsPage() {

  const location = useLocation();
  const cartItems = location.state?.cartItems || [];
  console.log(cartItems, 'Ticketpage')

    // // Hämta ticketItems från localStorage när komponenten renderas
    // const [ticketItems, setTicketItems] = useState([]);

    // useEffect(() => {
    //   // Hämta ticketItems från localStorage
    //   const savedTicketItems = localStorage.getItem('ticketItems');
    //   if (savedTicketItems) {
    //     setTicketItems(JSON.parse(savedTicketItems));
    //   } else {
    //     // Om ticketItems inte finns i localStorage, spara cartItems
    //     localStorage.setItem('ticketItems', JSON.stringify(cartItems));
    //     setTicketItems(cartItems);
    //   }
    // }, [cartItems]); // Uppdatera när cartItems ändras

  return (
    <section className="tickets-page__container">
      <article>
        
        {cartItems.map((item, index) => (
          <TicketCard 
          key={index} 
          index={index} 
          item={item} 
          quantity={item.quantity} 
          section='A' />
          // <div key={index}>
          //   <p>{item.event.name}</p>
          //   <p>{item.event.when.date}</p>
          //   <p>{item.event.when.from}</p>
          //   <p>{item.event.when.to}</p>
          //   <p>{item.event.where}</p>
          // </div>
        ))}
      </article>
    
    </section>
  )
}

export default TicketsPage;