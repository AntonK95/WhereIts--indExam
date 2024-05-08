

export const generateTicketID = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let ticketID = '';
    for(let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        ticketID += characters[randomIndex];
    }
    console.log(ticketID);
    return ticketID;
}

export const generateTickets = (quantity, section) => {
    const tickets = [];
    let seatNumber = 1; 
    for(let i = 0; i < quantity; i++) {
        const ticketID = generateTicketID();
        const seat = `${section} ${seatNumber}`;
        tickets.push({ ticketID, section, seat });
        seatNumber++;
    }
    return tickets;
}