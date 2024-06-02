import React, { useContext } from 'react';

import BuyNowIcon from '@/assets/products/buy-now.svg?react';
import { AppContext } from '@/context/App.context.tsx';
import type { ProductCardProps } from '@/interfaces/ProductCardProps.ts';

import styles from './productCard.module.css';

export const ProductCardComponent: React.FC<ProductCardProps> = ({ product }) => {
    const { cartItems, setCartItems } = useContext(AppContext);
    const currentProductInCart = cartItems.find((cartItem) => cartItem.id === product.id);
    const currentProductCountInCart = currentProductInCart ? currentProductInCart.quantity : null;

    const addProductToCart = () => {
        let isCartItemUpdated = false;
        const newCartItems = cartItems.map((cartItem) => {
            if (cartItem.id === product.id) {
                isCartItemUpdated = true;
                return { ...cartItem, quantity: cartItem.quantity + 1 };
            } else {
                return cartItem;
            }
        });

        if (!isCartItemUpdated) {
            const newCartItem = {
                id: product.id,
                quantity: 1,
                title: product.title,
                price: product.price,
                description: product.description,
                image: product.images[0],
            };

            newCartItems.push(newCartItem);
        }

        setCartItems(newCartItems);
    };

    return (
        <div className={styles.productCard}>
            <img className={styles.productImg} src={product.images[0]} alt={product.title} />
            <h3 className={styles.productTitle}>{product.title}</h3>
            <div className={styles.productCardFooter}>
                <div className={styles.productPriceWrapper}>
                    <p className={styles.productPrice}>{product.price}</p>
                    <span className={styles.productCurrency}>&#8372;</span>
                </div>
                <button className={styles.productBuyNow} type="button" onClick={addProductToCart}>
                    <BuyNowIcon />
                    {currentProductCountInCart && <span className={styles.cartIconCounter}>{currentProductCountInCart}</span>}
                </button>
            </div>
        </div>
    );
};
