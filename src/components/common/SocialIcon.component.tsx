import React from 'react';

import type { SocialIconProps } from '@/interfaces/SocialIconProps.ts';

export const SocialIconComponent: React.FC<SocialIconProps> = ({ icon, url, customClass }) => (
    <a className={customClass} href={url} target="_blank" rel="noopener noreferrer">
        <img src={String(icon)} alt="Icon" />
    </a>
);
