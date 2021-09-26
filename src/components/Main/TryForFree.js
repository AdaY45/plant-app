import styles from "./TryForFree.module.scss";
import logo from "../../imgs/icons/logo.svg";
import illustration from "../../imgs/icons/paint2.svg";

const TryForFree = () => {
    return <section className={styles.try}>
        <div className={styles.text}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" />
            </div>
            <h2>Get unlimited access to exclusive articles</h2>
            <p>Get rid of limits and read everything you wish</p>
            <button className={styles["try-btn"]}>Try For Free</button>
        </div>
        <div className={styles.image}>
            <img src={illustration} alt="girl and plant" />
        </div>
    </section>
};

export default TryForFree;