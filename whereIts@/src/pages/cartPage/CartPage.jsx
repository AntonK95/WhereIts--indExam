
import './cartpage.css'

import { useContext } from 'react'
import CartCard from '../../components/cartCard/CartCard';
import { CartContext } from '../../store/CartContext';

function CartPage() {

    const {cartItems} = useContext(CartContext);

    console.log(cartItems, 'CartPage');
  return (
    <section className='cart-page__wrapper'>
        <h2 className='cart-page__title'>Order</h2>
        <ul>
            {cartItems.map((item, index) => (
                <CartCard key={index} item={ item }/>
            ))}
        </ul>
    </section >
  )
}

export default CartPage;