import React from 'react';

import { AppContextProvider } from '@/context/App.context.tsx';

import { AboutComponent } from './components/about/About.component.tsx';
import { FooterComponent } from './components/footer/Footer.component.tsx';
import { HeaderComponent } from './components/header/Header.component.tsx';
import { ProductsListComponent } from './components/productList/ProductsList.component.tsx';

function App() {
    const [activeMenuItem, setActiveMenuItem] = React.useState<string>('products');

    return (
        <AppContextProvider>
            <HeaderComponent activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
            <main>{activeMenuItem === 'products' ? <ProductsListComponent /> : <AboutComponent />}</main>
            <FooterComponent />
        </AppContextProvider>
    );
}

export default App;
