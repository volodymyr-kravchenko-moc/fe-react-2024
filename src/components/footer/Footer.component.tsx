import facebookImg from '@/assets/footer/facebook.svg';
import instagramImg from '@/assets/footer/instagram.svg';
import linkedinImg from '@/assets/footer/linkedin.svg';

import { FooterIconComponent } from './FooterIcon.component.tsx';

import styles from './footer.module.css';

export const FooterComponent = () => (
    <footer className={styles.footer}>
        <div className={styles.divider}></div>
        <div className={styles.footerIcons}>
            <FooterIconComponent icon={String(facebookImg)} url="https://www.facebook.com/volodymyr.kravchenko.9" />
            <FooterIconComponent icon={String(linkedinImg)} url="https://www.linkedin.com/in/volodymyr-kravchenko-561516120/" />
            <FooterIconComponent icon={String(instagramImg)} url="https://www.instagram.com/kvs_ua/" />
        </div>
        <div className={styles.footerSign}>
            Made with 💗 on course{' '}
            <a
                className={styles.reactIntro}
                href="https://www.mastersacademy.education/frontend-for-beginners-it"
                target="_blank"
                rel="noreferrer"
            >
                &apos;Intro to React&apos; from Masters Academy in 2024
            </a>
            , by Volodymyr Kravchenko
        </div>
    </footer>
);
