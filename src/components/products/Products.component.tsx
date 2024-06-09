import productsFromApi from '@/assets/fake_data/products.json';
import { ProductsListComponent } from '@/components/productList/ProductsList.component.tsx';

export const ProductsComponent = () => <ProductsListComponent products={productsFromApi.slice(0, 20)} />;
