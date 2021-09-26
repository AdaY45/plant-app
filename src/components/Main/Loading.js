import styles from "./Loading.module.scss";

const Loading = () => {
    return <section className={styles.loading}>
        <div className={styles.img}></div>
        <div className={styles.info}></div>
        <div className={styles.head}></div>
        <div className={styles.desc}></div>
    </section>
};

export default Loading;