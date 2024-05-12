import React from 'react';

import type { LinkProps } from '@/interfaces/LinkProps.ts';
import type { SocialIconLinkProps } from '@/interfaces/SocialIconLinkProps.ts';

export const SocialIconLinkComponent: React.FC<SocialIconLinkProps> = ({ children, url, customClass, target }) => {
    const linkProps: LinkProps = {
        rel: 'noreferrer',
        target: target || '_blank',
    };

    if (url) {
        linkProps.href = url;
    }

    if (customClass) {
        linkProps.className = customClass;
    }

    return <a {...linkProps}>{children}</a>;
};
