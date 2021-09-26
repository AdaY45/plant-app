import useFetchWeather from "../../hooks/useFetchWeather";
import illustration from "../../imgs/icons/paint1.svg";

import styles from "./Search.module.scss";

const Search = (props) => {
  const weather = useFetchWeather();
  const searchHandler = (event) => {
    const val = event.target.value;
    console.log(val);
    if (val.trim().length > 0) {
      props.onSetArticles(
        props.data.filter((el) => new RegExp(val, "i").test(el.head))
      );
      props.onSetIsArticleSearched(true);
    } else if (val.length === 0) {
      props.onSetIsArticleSearched(false);
    }
  };

  return (
    <section className={styles["search-section"]}>
      <div className={styles["search-block"]}>
        <h2>Stay always tuned with planting trends</h2>
        <p className={styles.temperature}>
          Current temperature is: {weather}°C
        </p>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search"
            className={styles["search-input"]}
            onChange={searchHandler}
          />
        </div>
      </div>

      <div className={`${styles["search-block"]} ${styles.img}`}>
        <img src={illustration} alt="girl in the woods" />
      </div>
    </section>
  );
};

export default Search;
