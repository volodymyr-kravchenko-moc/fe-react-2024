import React from 'react';

import type { SocialIconButtonProps } from '@/interfaces/SocialIconButtonProps.ts';

export const SocialIconButtonComponent: React.FC<SocialIconButtonProps> = ({ children, customClass }) => {
    const buttonProps: any = customClass ? { className: customClass } : {};

    return <button {...buttonProps}>{children}</button>;
};
