import CartIcon from '@/assets/header/cart.svg?react';
import LogoIcon from '@/assets/header/desktop/logo.svg?react';
import LogoutIcon from '@/assets/header/desktop/logout.svg?react';
import MoonIcon from '@/assets/header/desktop/moon.svg?react';
import SignUpIcon from '@/assets/header/desktop/sign-up.svg?react';
import SunIcon from '@/assets/header/desktop/sun.svg?react';
import MenuIcon from '@/assets/header/mobile/menu.svg?react';
import { SocialIconButtonComponent } from '@/components/shared/SocialIconButtonComponent.tsx';
import { SocialIconLinkComponent } from '@/components/shared/SocialIconLinkComponent.tsx';

import styles from './header.module.css';

export const HeaderComponent = () => (
    <header className={styles.headerContainer}>
        <div className={styles.logo}>
            <SocialIconLinkComponent url="/" target="_self">
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
            <button type="button" className={styles.activeNavBarItem}>
                About
            </button>
            <button type="button" className={styles.navBarItem}>
                Products
            </button>
        </div>
        <div className={styles.actionItems}>
            <SocialIconButtonComponent customClass={styles.cart}>
                <CartIcon />
            </SocialIconButtonComponent>
            <div className={styles.loginWrapper}>
                <SocialIconButtonComponent customClass={styles.logout}>
                    <LogoutIcon />
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
