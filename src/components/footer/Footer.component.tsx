import facebookImg from '@/assets/footer/facebook.svg';
import instagramImg from '@/assets/footer/instagram.svg';
import linkedinImg from '@/assets/footer/linkedin.svg';

import { SocialIconComponent } from '../common/SocialIcon.component.tsx';

import styles from './footer.module.css';

export const FooterComponent = () => (
    <footer className={styles.footer}>
        <div className={styles.divider}></div>
        <div className={styles.footerIcons}>
            <SocialIconComponent
                icon={facebookImg}
                url="https://www.facebook.com/volodymyr.kravchenko.9"
                customClass={styles.footerIconLink}
            />
            <SocialIconComponent
                icon={linkedinImg}
                url="https://www.linkedin.com/in/volodymyr-kravchenko-561516120/"
                customClass={styles.footerIconLink}
            />
            <SocialIconComponent icon={instagramImg} url="https://www.instagram.com/kvs_ua/" customClass={styles.footerIconLink} />
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
