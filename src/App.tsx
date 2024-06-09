import { useState } from 'react';

import { ProductsComponent } from '@/components/products/Products.component.tsx';
import { AppContextProvider } from '@/context/App.context.tsx';
import { MenuItem } from '@/enum/MenuItem.ts';

import { AboutComponent } from './components/about/About.component.tsx';
import { FooterComponent } from './components/footer/Footer.component.tsx';
import { HeaderComponent } from './components/header/Header.component.tsx';

function App() {
    const [activeMenuItem, setActiveMenuItem] = useState<MenuItem>(MenuItem.PRODUCTS);

    return (
        <AppContextProvider>
            <HeaderComponent activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
            <main>{activeMenuItem === MenuItem.PRODUCTS ? <ProductsComponent /> : <AboutComponent />}</main>
            <FooterComponent />
        </AppContextProvider>
    );
}

export default App;
