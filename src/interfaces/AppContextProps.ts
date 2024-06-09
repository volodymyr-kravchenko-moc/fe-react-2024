import type { CartItemProps } from '@/interfaces/CartItemProps.ts';

export interface AppContextProps {
    cartItems: CartItemProps[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItemProps[]>>;
}
