import type { ImageProps } from '@/interfaces/ImageProps.ts';

export const ImageComponent: React.FC<ImageProps> = ({ imgSrc, imgAlt, imgWrapClasses, imgClasses }) => (
    <div className={imgWrapClasses}>
        <img className={imgClasses} src={String(imgSrc)} alt={imgAlt} />
    </div>
);
