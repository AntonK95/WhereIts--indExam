
import './cartpage.css'

import { useContext } from 'react'
import CartCard from '../../components/cartCard/CartCard';
import { CartContext } from '../../store/CartContext';

function CartPage() {

    const {cartItems} = useContext(CartContext);


    const calcTotalCost = () => {
      let totalCost = 0;
      cartItems.forEach(item => {
        totalCost += item.event.price * item.quantity;
      });
      console.log(calcTotalCost, 'Total kostnad');
      return totalCost;
    }

    console.log(cartItems, 'CartPage');
  return (
    <section className='cart-page__wrapper'>
        <h2 className='cart-page__title'>Order</h2>
        <ul className='cart-item__container'>
            {cartItems.map((item, index) => (
                <CartCard key={index} item={ item }/>
            ))}
        </ul>
        <section className='price-section'>
          <p className='cart-page__price-text'>Totalt värde på order:</p>
          <p className='cart-page__price'>{calcTotalCost()}</p>
        </section>
    </section >
  )
}

export default CartPage;