import React from 'react';

import type { ButtonProps } from '@/interfaces/ButtonProps.ts';
import type { SocialIconButtonProps } from '@/interfaces/SocialIconButtonProps.ts';

export const SocialIconButtonComponent: React.FC<SocialIconButtonProps> = ({ children, customClass, onClickAction }) => {
    const buttonProps: ButtonProps = { type: 'button' };

    if (customClass) {
        buttonProps.className = customClass;
    }

    if (onClickAction) {
        buttonProps.onClick = onClickAction;
    }

    return <button {...buttonProps}>{children}</button>;
};
