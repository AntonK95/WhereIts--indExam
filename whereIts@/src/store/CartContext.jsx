
import { createContext, useState, useEffect } from "react";

// Skapa kontext för kundvagn
export const CartContext = createContext();

// Skapa komponent för att hantera kundvagn
export const CartProvider = ({ children }) => {
    // State för kundvagn
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || [] );
    console.log(cartItems, 'cartItems CartContext')

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (eventItem, quantity) => {
        const updatedCartItems = cartItems.map(cartItem => {
            if(cartItem.event.id === eventItem.event.id) {
                return { ...cartItem, quantity };
            }
            return cartItem;
        })
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const removeFromCart = (event) => {
        const updatedCartItems = cartItems.filter(item => item.event !== event);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }

    return (
        <CartContext.Provider value={ { cartItems, addToCart, removeFromCart } }>
            {children}
        </CartContext.Provider >
    )

}