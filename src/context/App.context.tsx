import React, { createContext, useEffect, useState } from 'react';

import { Theme } from '@/enum/Theme.ts';
import type { AppContextProps } from '@/interfaces/AppContextProps.ts';
import type { AppContextProviderProps } from '@/interfaces/AppContextProviderProps.ts';
import type { CartItemProps } from '@/interfaces/CartItemProps.ts';

export const AppContext = createContext<AppContextProps>({
    theme: Theme.DARK,
    setTheme: () => {},
    cartItems: [],
    setCartItems: () => {},
});

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const [isInitialThemeLoading, setIsInitialThemeLoading] = useState<boolean>(true);
    const [theme, setTheme] = useState<Theme>(Theme.DARK);
    const [isInitialCartLoading, setIsInitialCartLoading] = useState<boolean>(true);
    const [cartItems, setCartItems] = useState<CartItemProps[]>([]);

    useEffect(() => {
        const storedTheme = localStorage.getItem('storedTheme');
        const extractedTheme = storedTheme ? JSON.parse(storedTheme) : null;
        const availableThemes = Object.values(Theme);

        if (availableThemes.includes(extractedTheme)) {
            setTheme(extractedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            setTheme(Theme.LIGHT);
        }
        setIsInitialThemeLoading(false);
    }, []);

    useEffect(() => {
        if (isInitialThemeLoading) {
            return;
        }

        localStorage.setItem('storedTheme', JSON.stringify(theme));
    }, [theme, isInitialThemeLoading]);

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

    return <AppContext.Provider value={{ theme, setTheme, cartItems, setCartItems }}>{children}</AppContext.Provider>;
};
