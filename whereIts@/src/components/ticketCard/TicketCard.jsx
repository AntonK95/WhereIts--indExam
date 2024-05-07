

function TicketCard({ item }) {
  
  
    return (
    <section className="ticket-card__wrapper">
         <section className="ticekt-card__container">
             <p>{item.event.name}</p>
             <p>{item.event.where}</p>
             <div className="ticket-time">
                <p>{item.event.when.date}</p>
                <p>{item.event.when.from}</p>
                <p>{item.event.when.to}</p>
             </div>
             <section className="ticket-card__info">

             </section>
             <section className="ticker-card__order-number"></section>
           </section>
    </section>
  )
}

export default TicketCard;