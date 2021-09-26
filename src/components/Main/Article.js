import styles from "./Article.module.scss";

const Article = (props) => {
  return (
    <a href="/#" className={`${props.isInteresting ? styles.interesting : ""} ${
      props.isSearched ? styles.search : ""
    }`}>
      <div
        className={`${styles.article} ${props.isNew ? styles.direction : ""} `}
      >
        <img src={props.img} alt={props.imgName} className={styles.image} />
        <div className={styles.text}>
          <p className={styles.info}>{props.info}</p>
          <h1 className={styles.head}>{props.head}</h1>
          <p className={styles["detailed-info"]}>{props.detailedInfo}</p>
        </div>
      </div>
    </a>
  );
};

export default Article;
