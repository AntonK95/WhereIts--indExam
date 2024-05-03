
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

    const addToCart = (event, quantity) => {
        setCartItems(prevItem => [...prevItem, { event, quantity}]);
    };

    return (
        <CartContext.Provider value={ { cartItems, addToCart } }>
            {children}
        </CartContext.Provider >
    )

}