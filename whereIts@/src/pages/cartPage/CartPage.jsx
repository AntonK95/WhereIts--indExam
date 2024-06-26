
import './cartpage.css'

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import CartCard from '../../components/cartCard/CartCard';
import { CartContext } from '../../store/CartContext';


function CartPage() {

    const navigate = useNavigate();
    const { cartItems, clearCart } = useContext(CartContext);


    const calcTotalCost = () => {
      let totalCost = 0;
      cartItems.forEach(item => {
        totalCost += item.event.price * item.quantity;
      });
      // console.log(calcTotalCost, 'Total kostnad');
      return totalCost;
    }

    const handleOrderBtnClick = () => {
      // Spara data från localStorage till en variabel
      const savedData = localStorage.getItem('cartItems');
      // Navigera till TicketPage och skicka med data från localStorage
      navigate( '/ticketspage',  
        { state: {cartItems: JSON.parse(savedData)} });
      // Rensa localStorage
      localStorage.removeItem('cartItems');
      clearCart();
    }

    // console.log(cartItems, 'CartPage');

  return (
    <section className='cart-page__wrapper'>
        <h2 className='cart-page__title'>Order</h2>
        <ul className='cart-item__container'>
            {cartItems.map((item, index) => (
                <CartCard key={index} item={ item }/>
            ))}
        </ul>
        <button className='order__btn' onClick={ handleOrderBtnClick }>Skicka Order</button>
        <section className='price-section'>
          <p className='cart-page__price-text'>Totalt värde på order:</p>
          <p className='cart-page__price'>{calcTotalCost()} SEK</p>
        </section>
    </section >
  )
}

export default CartPage;