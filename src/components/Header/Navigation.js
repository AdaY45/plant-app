import styles from "./Navigation.module.scss";

const Navigation = () => {
    return <nav className={styles.nav}>
        <a href="/#" className={styles["nav-btn"]}>Discover</a>
        <a href="/#" className={styles["nav-btn"]}>My Plants</a>
        <a href="/#" className={styles["nav-btn"]}>Diseases</a>
        <a href="/#" className={styles["nav-btn"]}>Blog</a>
        <a href="/#" className={styles["nav-btn"]}>FAQ</a>
        <a href="/#" className={styles["nav-btn"]}>Contact Us</a>
    </nav>
};

export default Navigation;