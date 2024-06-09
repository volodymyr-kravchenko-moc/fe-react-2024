import type { ButtonProps } from '@/interfaces/ButtonProps.ts';
import type { SocialIconButtonProps } from '@/interfaces/SocialIconButtonProps.ts';

export const SocialIconButtonComponent: React.FC<SocialIconButtonProps> = ({ children, customClass }) => {
    const buttonProps: ButtonProps = { type: 'button' };

    if (customClass) {
        buttonProps.className = customClass;
    }

    return <button {...buttonProps}>{children}</button>;
};
