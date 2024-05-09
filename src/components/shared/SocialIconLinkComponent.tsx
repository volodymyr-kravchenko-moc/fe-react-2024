import React from 'react';

import type { SocialIconLinkProps } from '@/interfaces/SocialIconLinkProps.ts';

export const SocialIconLinkComponent: React.FC<SocialIconLinkProps> = ({ children, url, customClass, target }) => {
    const linkProps: any = { rel: 'noreferrer' };

    linkProps.target = target || '_blank';

    if (url) {
        linkProps.href = url;
    }

    if (customClass) {
        linkProps.className = customClass;
    }

    return <a {...linkProps}>{children}</a>;
};
