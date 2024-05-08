
import TicketCard from '../../components/ticketCard/TicketCard';
import './ticketspage.css';

import { useLocation } from 'react-router-dom';

function TicketsPage() {

  const location = useLocation();
  const cartItems = location.state?.cartItems || [];
  console.log(cartItems, 'Ticketpage')

  return (
    <section className="tickets-page__container">
      <article>
        
        {cartItems.map((item, index) => (
          <TicketCard key={index} index={index} item={item} />
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