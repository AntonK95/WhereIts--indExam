
import { Link } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <>
        <div className='navbar'>
            <Link to={'/eventpage'} >
                Events
            </Link>
            <Link to={'/cartpage'} >
                Cart
            </Link>
            <Link to={'/ticketspage'} >
                Tickets
            </Link>
        </div>
    </>
  )
}

export default Navigation;