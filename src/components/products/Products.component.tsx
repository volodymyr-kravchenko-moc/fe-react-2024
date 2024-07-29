import productsFromApi from '@/assets/fake_data/products.json';
import { ProductsListComponent } from '@/components/productList/ProductsList.component.tsx';
import { SearchBar } from '@/components/searchBar/SearchBar.component.tsx';

export const ProductsComponent = () => (
    <>
        <SearchBar />
        <ProductsListComponent products={productsFromApi.slice(0, 20)} />
    </>
);
