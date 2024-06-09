import { useState } from 'react';

import { ProductsComponent } from '@/components/products/Products.component.tsx';
import { AppContextProvider } from '@/context/App.context.tsx';

import { AboutComponent } from './components/about/About.component.tsx';
import { FooterComponent } from './components/footer/Footer.component.tsx';
import { HeaderComponent } from './components/header/Header.component.tsx';

function App() {
    const [activeMenuItem, setActiveMenuItem] = useState<string>('products');

    return (
        <AppContextProvider>
            <HeaderComponent activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
            <main>{activeMenuItem === 'products' ? <ProductsComponent /> : <AboutComponent />}</main>
            <FooterComponent />
        </AppContextProvider>
    );
}

export default App;
