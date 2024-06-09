import { useEffect, useState } from 'react';

import productsFromApi from '@/assets/fake_data/products.json';
import { ProductsListComponent } from '@/components/productList/ProductsList.component.tsx';
import type { ProductProps } from '@/interfaces/ProductProps.ts';

export const ProductsComponent = () => {
    const page = 0;
    const [products, setProducts] = useState<ProductProps[]>([]);

    useEffect(() => {
        setProducts(productsFromApi.slice(0, 20));
    }, [page]);

    return <ProductsListComponent products={products} />;
};
