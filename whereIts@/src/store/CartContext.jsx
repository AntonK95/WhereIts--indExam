
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

    // const addToCart = useCallback((eventItem, quantity) => {
    //     setCartItems(prevCartItems => {
    //         console.log(prevCartItems, 'Event items in cart')
    //         const existingCartItemIndex = prevCartItems.findIndex(item => item.event && item.event === eventItem.event);
    //         if (existingCartItemIndex !== -1) {
    //             // Om objektet redan finns i kundvagnen, uppdatera bara dess kvantitet
    //             const updatedCartItems = [...prevCartItems];
    //             updatedCartItems[existingCartItemIndex] = { ...prevCartItems[existingCartItemIndex], quantity };
    //             return updatedCartItems;
    //         } else {
    //             // Om objektet inte finns i kundvagnen än, lägg till det
    //             return [...prevCartItems, { event: eventItem, quantity }];
    //         }
    //     });
    // }, []);

    // const addToCart = useCallback((eventItem, quantity) => {
    //     setCartItems(prevCartItems => {
    //         console.log(prevCartItems, 'Event items in cart')
    //         const existingCartItemIndex = prevCartItems.findIndex(item => item.event.id === eventItem.event.id);
    //         if (existingCartItemIndex !== -1) {
    //             // Om objektet redan finns i kundvagnen, uppdatera bara dess kvantitet
    //             const updatedCartItems = [...prevCartItems];
    //             updatedCartItems[existingCartItemIndex] = { ...prevCartItems[existingCartItemIndex], quantity };
    //             return updatedCartItems;
    //         } else {
    //             // Om objektet inte finns i kundvagnen än, lägg till det
    //             return [...prevCartItems, { event: eventItem, quantity }];
    //         }
    //     });
    // }, []);
    

    // Memoized version av addToCart-funktionen för att undvika onödiga re-renderingar
    // const addToCart = useCallback((eventItem, quantity) => {
    //     setCartItems(prevCartItems => {
    //         const existingCartItemIndex = prevCartItems.findIndex(item => item.event.id === eventItem.id);
    //         if (existingCartItemIndex !== -1) {
    //             // Om objektet redan finns i kundvagnen, uppdatera bara dess kvantitet
    //             const updatedCartItems = [...prevCartItems];
    //             updatedCartItems[existingCartItemIndex] = { ...prevCartItems[existingCartItemIndex], quantity };
    //             return updatedCartItems;
    //         } else {
    //             // Om objektet inte finns i kundvagnen än, lägg till det
    //             return [...prevCartItems, { event: eventItem, quantity }];
    //         }
    //     });
    // }, []);

    // const addToCart = (eventItem, quantity) => {
    //     console.log(eventItem, 'eventItem i addToCart');
    //     console.log(quantity, 'quantity i addToCart');
    //     const existingCartItem = cartItems.find(item => item.event.id === event.id);
    //     if (existingCartItem) {
    //         // Om objektet redan finns i kundvagnen, uppdatera bara dess kvantitet
    //         const updatedCartItems = cartItems.map(item =>
    //             item.event.id === eventItem.id ? { ...item, quantity } : item
    //         );
    //         setCartItems(updatedCartItems);
    //         localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    //     } else {
    //         // Om objektet inte finns i kundvagnen än, lägg till det
    //         const newCartItem = { event: eventItem, quantity };
    //         const updatedCartItems = [...cartItems, newCartItem];
    //         setCartItems(updatedCartItems);
    //         localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    //     }
    // };
    
    
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

    return (
        <CartContext.Provider value={ { cartItems, addToCart, removeFromCart } }>
            {children}
        </CartContext.Provider >
    )

}