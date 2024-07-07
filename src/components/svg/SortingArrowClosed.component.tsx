import { useContext } from 'react';

import { AppContext } from '@/context/App.context.tsx';
import { Theme } from '@/enum/Theme.ts';

export const SortingArrowClosedComponent = () => {
    const { theme } = useContext(AppContext);
    const iconColor = theme === Theme.DARK ? '#FFF' : '#111';

    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 7.5L9 10.5L6 7.5" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
