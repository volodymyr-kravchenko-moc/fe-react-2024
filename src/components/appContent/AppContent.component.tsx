import React, { useContext, useState } from 'react';

import { AboutComponent } from '@/components/about/About.component.tsx';
import styles from '@/components/appContent/appComponent.module.css';
import { FooterComponent } from '@/components/footer/Footer.component.tsx';
import { HeaderComponent } from '@/components/header/Header.component.tsx';
import { ProductsComponent } from '@/components/products/Products.component.tsx';
import { AppContext } from '@/context/App.context.tsx';
import { MenuItem } from '@/enum/MenuItem.ts';

export const AppContentComponent = () => {
    const { theme } = useContext(AppContext);
    const [activeMenuItem, setActiveMenuItem] = useState<MenuItem>(MenuItem.PRODUCTS);

    return (
        <div className={`${theme}-theme`}>
            <HeaderComponent activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
            <div className={styles.mainContentWrapper}>
                <main>{activeMenuItem === MenuItem.PRODUCTS ? <ProductsComponent /> : <AboutComponent />}</main>
                <FooterComponent />
            </div>
        </div>
    );
};
