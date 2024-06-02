import type React from 'react';

export interface HeaderComponentProps {
    activeMenuItem: string;
    setActiveMenuItem: React.Dispatch<React.SetStateAction<string>>;
}
