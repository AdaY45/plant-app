import styles from "./Footer.module.scss";

const Footer = () => {
    return <footer className={styles.footer}>
        <nav className={styles["footer-nav"]}>
            <a href="/#" className={styles["footer-btn"]}>Terms of Service</a>
            <div>|</div>
            <a href="/#" className={styles["footer-btn"]}>Privacy Policy</a>
            <div>|</div>
            <a href="/#" className={styles["footer-btn"]}>Subscription Policy</a>
        </nav>
        <div className={styles.copyright}>©Copyright  © 2020 PlantIn. All rights reserved</div>
    </footer>
};

export default Footer;