import aboutImg from '@/assets/about/about-photo.png';
import { ImageComponent } from '@/components/shared/Image.component.tsx';
import { TitleComponent } from '@/components/shared/Title.component.tsx';

import styles from './About.module.css';

export const AboutComponent = () => {
    const imgAlt = 'About logo';

    return (
        <section className={styles.wrapper}>
            <TitleComponent titleClasses={styles.aboutTitle}>About me</TitleComponent>
            <div className={styles.aboutDescription}>
                <p className={styles.aboutText}>
                    Hi! My name is Volodymyr and I&apos;m a Junior Frontend Developer. I am already familiar with main Web Technologies like
                    React, HTML, CSS, JavaScript and Git version control system.
                </p>
                <p className={styles.aboutText}>
                    This page was developed during the course &apos;
                    <span className={styles.aboutText}>
                        <a href="https://www.mastersacademy.education/frontend-for-beginners-it" target="_blank" rel="noreferrer">
                            Intro to React
                        </a>
                    </span>
                    &apos; from Masters Academy in 2024.
                </p>
                <p className={styles.aboutText}>
                    This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my own
                    small project for the portfolio.
                </p>
                <p className={styles.aboutText}>
                    You can contact me via{' '}
                    <span className={styles.aboutText}>
                        <a href="https://t.me/kvs2204" target="_blank" rel="noreferrer">
                            Telegram
                        </a>{' '}
                    </span>
                    and check out my{' '}
                    <a href="https://github.com/volodymyr-kravchenko-moc" target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                    .
                </p>
            </div>
            <ImageComponent imgSrc={aboutImg} imgAlt={imgAlt} imgWrapClasses={styles.imageWrap} imgClasses={styles.img} />
        </section>
    );
};
