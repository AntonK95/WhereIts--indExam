
import { Link } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <>
        <div className='navbar'>
            <Link  to={'/eventpage'} >
                <button className='events' aria-label='events'>Events</button>
            </Link>
            <Link to={'/cartpage'} >
                <button className='cart'>Cart</button>
            </Link>
            <Link to={'/ticketspage'} >
                <button className='tickets'>Tickets</button>
            </Link>
        </div>
    </>
  )
}

export default Navigation;