import CartIcon from '@/assets/header/cart.svg?react';
import LoginIcon from '@/assets/header/desktop/login.svg?react';
import LogoIcon from '@/assets/header/desktop/logo.svg?react';
import MoonIcon from '@/assets/header/desktop/moon.svg?react';
import SignUpIcon from '@/assets/header/desktop/sign-up.svg?react';
import SunIcon from '@/assets/header/desktop/sun.svg?react';
import MenuIcon from '@/assets/header/mobile/menu.svg?react';
import { SocialIconButtonComponent } from '@/components/shared/SocialIconButtonComponent.tsx';
import { SocialIconLinkComponent } from '@/components/shared/SocialIconLinkComponent.tsx';

import styles from './header.module.css';

export const HeaderComponent = () => (
    <header className={styles.headerContainer}>
        <div className={styles.firstMainWrapper}>
            <SocialIconLinkComponent url="/" target="_self">
                <LogoIcon />
            </SocialIconLinkComponent>
            <div className={styles.layout}>
                <SocialIconButtonComponent customClass={styles.sun}>
                    <SunIcon />
                </SocialIconButtonComponent>
                <SocialIconButtonComponent customClass={styles.moon}>
                    <MoonIcon />
                </SocialIconButtonComponent>
            </div>
        </div>
        <div className={styles.secondMainWrapper}>
            <div className={styles.navBarWrapper}>
                <button className={styles.navBarItem}>About</button>
                <button className={styles.navBarItem}>Products</button>
            </div>
            <div className={styles.actionItemsWrapper}>
                <SocialIconButtonComponent customClass={styles.cart}>
                    <CartIcon />
                </SocialIconButtonComponent>
                <SocialIconButtonComponent customClass={styles.login}>
                    <LoginIcon />
                </SocialIconButtonComponent>
                <SocialIconButtonComponent customClass={styles.signUp}>
                    <SignUpIcon />
                </SocialIconButtonComponent>
                <SocialIconButtonComponent customClass={styles.menu}>
                    <MenuIcon />
                </SocialIconButtonComponent>
            </div>
        </div>
    </header>
);
