export interface CategoryButtonProps {
    key: string;
    category: string;
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}
