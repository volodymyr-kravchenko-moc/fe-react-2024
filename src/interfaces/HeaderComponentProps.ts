import type { MenuItem } from '@/enum/MenuItem.ts';

export interface HeaderComponentProps {
    activeMenuItem: MenuItem;
    setActiveMenuItem: React.Dispatch<React.SetStateAction<MenuItem>>;
}
