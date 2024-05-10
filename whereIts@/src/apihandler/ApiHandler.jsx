
import React, { useEffect } from 'react';
import axios from "axios";



const ApiHandler = ({ setEvents }) => {

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('https://santosnr6.github.io/Data/events.json');
                setEvents(response.data.events);
                console.log(events);
            } catch (error) {
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