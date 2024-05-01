import type { CategoryProps } from '@/interfaces/CategoryProps.ts';

export interface ProductProps {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: Date;
    updatedAt: Date;
    category: CategoryProps;
}
