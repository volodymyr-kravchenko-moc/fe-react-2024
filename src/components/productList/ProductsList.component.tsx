import React, { useEffect } from 'react';

import productsFromApi from '@/assets/fake_data/products.json';
import { ProductCardComponent } from '@/components/productCard/ProductCard.component.tsx';
import type { ProductProps } from '@/interfaces/ProductProps.ts';

import styles from './productList.module.css';

export const ProductsListComponent = () => {
    const page = 0;
    const [products, setProducts] = React.useState<ProductProps[]>([]);

    useEffect(() => {
        setProducts(productsFromApi.slice(0, 20));
    }, [page]);

    return (
        <ul className={styles.productList}>
            {products.map((product) => (
                <li key={product.id}>
                    <ProductCardComponent product={product} />
                </li>
            ))}
        </ul>
    );
};
