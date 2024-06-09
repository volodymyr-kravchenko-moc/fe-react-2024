import type { TitleProps } from '@/interfaces/TitleProps.ts';

export const TitleComponent: React.FC<TitleProps> = ({ children, titleClasses }) => <h2 className={titleClasses}>{children}</h2>;
