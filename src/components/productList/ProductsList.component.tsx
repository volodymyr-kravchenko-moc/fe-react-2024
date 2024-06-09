import { ProductCardComponent } from '@/components/productCard/ProductCard.component.tsx';
import type { ProductsListProps } from '@/interfaces/ProductsListProps.ts';

import styles from './productList.module.css';

export const ProductsListComponent: React.FC<ProductsListProps> = ({ products }) => (
    <ul className={styles.productList}>
        {products.map((product) => (
            <li key={product.id}>
                <ProductCardComponent product={product} />
            </li>
        ))}
    </ul>
);
