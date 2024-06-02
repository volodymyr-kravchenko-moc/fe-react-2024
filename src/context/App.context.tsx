import React from 'react';
import { createContext, useEffect } from 'react';

import type { AppContextProps } from '@/interfaces/AppContextProps.ts';
import type { AppContextProviderProps } from '@/interfaces/AppContextProviderProps.ts';
import type { CartItemProps } from '@/interfaces/CartItemProps.ts';

export const AppContext = createContext<AppContextProps>({
    cartItems: [],
    setCartItems: () => {},
});

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = React.useState<CartItemProps[]>([]);
    const [isInitialCartLoading, setInitialCartLoading] = React.useState<boolean>(true);

    useEffect(() => {
        const storedCartItems = localStorage.getItem('storedCartItems');
        const extractedCartItems = storedCartItems ? JSON.parse(storedCartItems) : null;

        extractedCartItems && setCartItems(extractedCartItems);
        setInitialCartLoading(false);
    }, []);

    useEffect(() => {
        if (isInitialCartLoading) {
            return;
        }

        localStorage.setItem('storedCartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    return <AppContext.Provider value={{ cartItems, setCartItems }}>{children}</AppContext.Provider>;
};
