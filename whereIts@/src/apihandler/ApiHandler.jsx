
import React, { useEffect, useState } from 'react';
import axios from "axios";



const ApiHandler = ({ setEvents }) => {

    // const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('https://santosnr6.github.io/Data/events.json');
                setEvents(response.data.events);
                // console.log(setEvents);
                // console.log(fetchEvents);
                console.log(events);
            }catch (error) {
                console.log(error, 'Något gick fel vid hämtning av events');
            }
        }
            
    fetchEvents(); 
}, [ setEvents ])



  return (
    <div>
      
    </div>
  )
}

export default ApiHandler;