import React, { createContext, useEffect, useState } from 'react';

import type { AppContextProps } from '@/interfaces/AppContextProps.ts';
import type { AppContextProviderProps } from '@/interfaces/AppContextProviderProps.ts';
import type { CartItemProps } from '@/interfaces/CartItemProps.ts';

export const AppContext = createContext<AppContextProps>({
    cartItems: [],
    setCartItems: () => {},
});

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
    const [isInitialCartLoading, setIsInitialCartLoading] = useState<boolean>(true);

    useEffect(() => {
        const storedCartItems = localStorage.getItem('storedCartItems');
        const extractedCartItems = storedCartItems ? JSON.parse(storedCartItems) : null;

        extractedCartItems && setCartItems(extractedCartItems);
        setIsInitialCartLoading(false);
    }, []);

    useEffect(() => {
        if (isInitialCartLoading) {
            return;
        }

        localStorage.setItem('storedCartItems', JSON.stringify(cartItems));
    }, [cartItems, isInitialCartLoading]);

    return <AppContext.Provider value={{ cartItems, setCartItems }}>{children}</AppContext.Provider>;
};
