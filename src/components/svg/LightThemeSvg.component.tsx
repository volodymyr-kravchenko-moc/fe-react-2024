import { useContext } from 'react';

import { AppContext } from '@/context/App.context.tsx';
import { Theme } from '@/enum/Theme.ts';

export const LightThemeSvgComponent = () => {
    const { theme } = useContext(AppContext);
    const iconColor = theme === Theme.LIGHT ? '#FFF' : '#656565';

    return (
        <svg width="30" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#a)">
                <path
                    d="M15 10.333V8.667m0 15v1.666m-4.655-12.988-1.178-1.178m10.606 10.606 1.179 1.179M8.333 17H6.667m15 0h1.666m-3.56-4.655 1.18-1.178M10.345 21.773l-1.179 1.179M15 21.167a4.167 4.167 0 1 1 0-8.334 4.167 4.167 0 0 1 0 8.334Z"
                    stroke={iconColor}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" transform="translate(5 7)" d="M0 0h20v20H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};
