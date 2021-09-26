import { useState, useEffect, Fragment } from "react";
import Navigation from "./Navigation";
import search from "../../imgs/icons/search-header.svg";
import logo from "../../imgs/icons/logo.svg";
import profile from "../../imgs/icons/profile.svg";
import menu from "../../imgs/icons/menu.svg";
import styles from "./Header.module.scss";

const Header = () => {
  const [isMenuClicked, setIsmenuClicked] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const menuClickHandler = () => {
    setIsmenuClicked(!isMenuClicked);
  };

  return (
    <Fragment>
      <header className={styles.header}>
        {width > 1100 ? <Navigation /> : <img src={logo} alt="logo" />}

        <div className={styles["header-block"]}>
          <button className={styles.search}>
            <img src={search} alt="search header" />
          </button>
          <button className={styles.profile}>
            <img
              src={profile}
              alt="profile"
              className={styles["profile-img"]}
            ></img>
            <img
              onClick={menuClickHandler}
              src={menu}
              alt="menu"
              className={styles.menu}
            />
          </button>
        </div>
      </header>
      {isMenuClicked && <Navigation />}
    </Fragment>
  );
};

export default Header;
