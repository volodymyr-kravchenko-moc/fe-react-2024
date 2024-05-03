import React from 'react';

import type { FooterIconProps } from '@/interfaces/footer/footer_icon_props.ts';

import styles from './footerIcon.module.css';

export const FooterIconComponent: React.FC<FooterIconProps> = ({ icon, url }) => (
    <a className={styles.footerIconLink} href={url} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt="Icon" />
    </a>
);
