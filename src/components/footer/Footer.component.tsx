import FacebookIcon from '@/assets/footer/facebook.svg?react';
import InstagramIcon from '@/assets/footer/instagram.svg?react';
import LinkedinIcon from '@/assets/footer/linkedin.svg?react';
import { SocialIconLinkComponent } from '@/components/shared/SocialIconLinkComponent.tsx';

import styles from './footer.module.css';

export const FooterComponent = () => (
    <footer className={styles.footer}>
        <div className={styles.divider}></div>
        <div className={styles.footerIcons}>
            <SocialIconLinkComponent url="https://www.facebook.com/volodymyr.kravchenko.9" customClass={styles.footerIconLink}>
                <FacebookIcon />
            </SocialIconLinkComponent>
            <SocialIconLinkComponent url="https://www.linkedin.com/in/volodymyr-kravchenko-561516120/" customClass={styles.footerIconLink}>
                <LinkedinIcon />
            </SocialIconLinkComponent>
            <SocialIconLinkComponent url="https://www.instagram.com/kvs_ua/" customClass={styles.footerIconLink}>
                <InstagramIcon />
            </SocialIconLinkComponent>
        </div>
        <p className={styles.footerSign}>
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
        </p>
    </footer>
);
