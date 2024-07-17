import { useContext } from 'react';

import { AppContext } from '@/context/App.context.tsx';
import { Theme } from '@/enum/Theme.ts';

export const DarkThemeSvgComponent = () => {
    const { theme } = useContext(AppContext);
    const iconColor = theme === Theme.DARK ? '#FFF' : '#656565';

    return (
        <svg width="30" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.5 12a7.5 7.5 0 0 0 9.679 7.179 7.5 7.5 0 1 1-9.357-9.357A7.502 7.502 0 0 0 12.5 12Z"
                stroke={iconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
