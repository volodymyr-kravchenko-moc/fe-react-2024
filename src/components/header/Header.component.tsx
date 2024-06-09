import React, { useContext } from 'react';

import CartIcon from '@/assets/header/cart.svg?react';
import LoginIcon from '@/assets/header/desktop/login.svg?react';
import LogoIcon from '@/assets/header/desktop/logo.svg?react';
import MoonIcon from '@/assets/header/desktop/moon.svg?react';
import SignUpIcon from '@/assets/header/desktop/sign-up.svg?react';
import SunIcon from '@/assets/header/desktop/sun.svg?react';
import MenuIcon from '@/assets/header/mobile/menu.svg?react';
import { SocialIconButtonComponent } from '@/components/shared/SocialIconButtonComponent.tsx';
import { SocialIconLinkComponent } from '@/components/shared/SocialIconLinkComponent.tsx';
import { AppContext } from '@/context/App.context.tsx';
import { MenuItem } from '@/enum/MenuItem.ts';
import type { HeaderComponentProps } from '@/interfaces/HeaderComponentProps.ts';

import styles from './header.module.css';

export const HeaderComponent: React.FC<HeaderComponentProps> = ({ activeMenuItem, setActiveMenuItem }) => {
    const { cartItems } = useContext(AppContext);
    const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    const setAboutPageActive = () => {
        setActiveMenuItem(MenuItem.ABOUT);
    };

    const setProductsPageActive = () => {
        setActiveMenuItem(MenuItem.PRODUCTS);
    };

    return (
        <header className={styles.headerContainer}>
            <div className={styles.logo}>
                <SocialIconLinkComponent url="/fe-react-2024/" target="_self">
                    <LogoIcon />
                </SocialIconLinkComponent>
            </div>
            <div className={styles.appLayout}>
                <SocialIconButtonComponent customClass={styles.sun}>
                    <SunIcon />
                </SocialIconButtonComponent>
                <SocialIconButtonComponent customClass={styles.moon}>
                    <MoonIcon />
                </SocialIconButtonComponent>
            </div>
            <div className={styles.navBar}>
                <button
                    type="button"
                    className={activeMenuItem === MenuItem.ABOUT ? styles.activeNavBarItem : styles.navBarItem}
                    onClick={setAboutPageActive}
                >
                    About
                </button>
                <button
                    type="button"
                    className={activeMenuItem === MenuItem.PRODUCTS ? styles.activeNavBarItem : styles.navBarItem}
                    onClick={setProductsPageActive}
                >
                    Products
                </button>
            </div>
            <div className={styles.actionItems}>
                <SocialIconButtonComponent customClass={styles.cart}>
                    {cartItemsCount > 0 ? (
                        <div>
                            <CartIcon />
                            <span className={styles.cartIconCounter}>{cartItemsCount}</span>
                        </div>
                    ) : (
                        <CartIcon />
                    )}
                </SocialIconButtonComponent>
                <div className={styles.loginWrapper}>
                    <SocialIconButtonComponent customClass={styles.login}>
                        <LoginIcon />
                    </SocialIconButtonComponent>
                    <SocialIconButtonComponent customClass={styles.signUp}>
                        <SignUpIcon />
                    </SocialIconButtonComponent>
                </div>
                <SocialIconButtonComponent customClass={styles.menu}>
                    <MenuIcon />
                </SocialIconButtonComponent>
            </div>
        </header>
    );
};
