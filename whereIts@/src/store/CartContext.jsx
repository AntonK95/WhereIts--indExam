
import { createContext, useState, useEffect, useCallback } from "react";

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

    
    const addToCart = useCallback((eventItem, quantity) => {
        setCartItems(prevCartItems => {
            console.log(prevCartItems, 'Event items in cart')
            const existingCartItemIndex = prevCartItems.findIndex(item => item.event && item.event.id === eventItem.id);
            if (existingCartItemIndex !== -1) {
                // Om objektet redan finns i kundvagnen, uppdatera bara dess kvantitet
                const updatedCartItems = [...prevCartItems];
                updatedCartItems[existingCartItemIndex] = { ...prevCartItems[existingCartItemIndex], quantity };
                return updatedCartItems;
            } else {
                // Om objektet inte finns i kundvagnen än, lägg till det
                return [...prevCartItems, { event: eventItem, quantity }];
            }
        });
    }, []);
    
    // Nedan kod fungerade förut..
    // const addToCart = (eventItem, quantity) => {
    //     const updatedCartItems = cartItems.map(cartItem => {
    //         if(cartItem.event.id === eventItem.event.id) {
    //             return { ...cartItem, quantity };
    //         }
    //         return cartItem;
    //     });
    //     if(!updatedCartItems.some(item => item.event.id === eventItem.event.id)) {
    //        updatedCartItems.push({ event: eventItem.event, quantity }); 
    //     }
    //     setCartItems(updatedCartItems);
    //     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    // };



    const removeFromCart = (event) => {
        const updatedCartItems = cartItems.filter(item => item.event.id !== event.id);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }

    const clearCart = () => {
        setCartItems([]);
    }

    return (
        <CartContext.Provider value={ { cartItems, clearCart, addToCart, removeFromCart } }>
            {children}
        </CartContext.Provider >
    )

}