import './ticketcard.css';

function TicketCard({ item, index, section, quantity }) {
  
    // Funktion för att generera sittplats till biljett
    const generateSeat = (index) => {
        const section = String.fromCharCode(65 + Math.floor(index / 10)); // Generera sektion
        const seat = (index % 10) + 1; // Generera plats
        return `Section: ${section} Seat: ${seat}`;
    };

    // Förklaring
    // const section = String.fromCharCode(65 + Math.floor(index / 10));
    // För varje 10:e biljett ökar vi sektionen. 
    // String.fromCharCode används för att konvertera ett nummer till motsvarande tecken i ASCII-tabellen. 
    // 65 representerar bokstaven "A" i ASCII-tabellen, 
    // så när index ökar med 10 kommer vi att gå från "A" till "B", "C" och så vidare.
  
    const generateTicketNumber = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let ticketID = '';
        for(let i = 0; i < 5; i++) {
           const randomIndex = Math.floor(Math.random() * characters.length);
           ticketID += characters[randomIndex]; 
        }
        return ticketID;
    }


    const tickets = [];
    for (let i = 0; i < quantity; i++) {
        const seat = generateSeat(index + i, section);
        const ticketID = generateTicketNumber();
        tickets.push(
            <section key={index + 1} className="ticket-card__wrapper">
         <section className="ticket-card__container">
             <section className='ticket-card__what'>
                <p className='what'>WHAT</p>
                <p className='ticket-card__name'>{item.event.name}</p>
            </section>
            <section className='ticket-card__where'>
                <p className='where'>WHERE</p>
                <p className='ticket-card__location'>{item.event.where}</p>
            </section>
             <div className="ticket-time">
                <div className="ticket-date">
                    <p className="ticket-when">WHEN</p>
                    <p className='date'>{item.event.when.date}</p>
                </div>
                <div className='ticket-from'>
                    <p className='ticket-from-time'>FROM</p>
                    <p className='from'>{item.event.when.from}</p>
                </div>
                <div className='ticket-to'>
                    <p className='ticket-to-time'>TO</p>
                    <p className='to'>{item.event.when.to}</p>
                </div>
             </div>
             <section className="ticket-card__info">
                <p className='info'>INFO</p>
                <p className="ticket-card__seat">
                    {seat}
                </p>
             </section>
             <section className="ticket-card__order-number">
                <p className='barcode'>{`#${ticketID}`}</p>
                <p className='order-number'>{`#${ticketID}`}</p>
             </section>
           </section>
    </section>
        )
    }
  
    return (
        <div>
            { tickets }
        </div>
    // <section className="ticket-card__wrapper">
    //      <section className="ticket-card__container">
    //          <section className='ticket-card__what'>
    //             <p className='what'>WHAT</p>
    //             <p className='ticket-card__name'>{item.event.name}</p>
    //         </section>
    //         <section className='ticket-card__where'>
    //             <p className='where'>WHERE</p>
    //             <p className='ticket-card__location'>{item.event.where}</p>
    //         </section>
    //          <div className="ticket-time">
    //             <div className="ticket-date">
    //                 <p className="ticket-when">WHEN</p>
    //                 <p className='date'>{item.event.when.date}</p>
    //             </div>
    //             <div className='ticket-from'>
    //                 <p className='ticket-from-time'>FROM</p>
    //                 <p className='from'>{item.event.when.from}</p>
    //             </div>
    //             <div className='ticket-to'>
    //                 <p className='ticket-to-time'>TO</p>
    //                 <p className='to'>{item.event.when.to}</p>
    //             </div>
    //          </div>
    //          <section className="ticket-card__info">
    //             <p className='info'>INFO</p>
    //             <p className="ticket-card__seat">
    //                 {seat}
    //             </p>
    //          </section>
    //          <section className="ticket-card__order-number">
    //             <p className='barcode'>#A4E31</p>
    //             <p className='order-number'>#A4E31</p>
    //          </section>
    //        </section>
    // </section>
  )
}

export default TicketCard;