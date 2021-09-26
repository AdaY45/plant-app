import styles from "./NavigationMain.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const NavigationMain = () => {
  library.add(faChevronLeft);

  return (
    <nav className={styles["nav-main"]}>
      <a href="/#" className={styles["nav-btn-main"]}>
        Home
      </a>
      <div className={styles.arrow}>
        <FontAwesomeIcon icon="chevron-left"  className={styles.icon}/>
      </div>
      <a href="/#" className={styles["nav-btn-main"]}>
        Blog
      </a>
      <div className={styles.arrow}>
        <FontAwesomeIcon icon="chevron-left" className={styles.icon} />
      </div>
    </nav>
  );
};

export default NavigationMain;
