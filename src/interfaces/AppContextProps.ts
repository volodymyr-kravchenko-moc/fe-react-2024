import type React from 'react';

import type { Theme } from '@/enum/Theme.ts';
import type { CartItemProps } from '@/interfaces/CartItemProps.ts';

export interface AppContextProps {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
    cartItems: CartItemProps[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItemProps[]>>;
}
