

import { useContext } from 'react'
// import CartCard from '../../components/cartCard/CartCard';
import { CartContext } from '../../store/CartContext';

function CartPage() {

    const {cartItems} = useContext(CartContext);

    console.log(cartItems, 'CartPage');
  return (
    <section className='cart-page__wrapper'>
        <h2>Kundvagn</h2>
        <ul>
            {cartItems.map((item, index) => (
                <li key={index}>
                    <p>Evenemag: {item.event.name}</p>
                    <p>Antal biljetter: {item.quantity}</p>
                </li>
            ))}
        </ul>
        {/* <CartCard cartItems={ cartItems }/> */}
    </section >
  )
}

export default CartPage;