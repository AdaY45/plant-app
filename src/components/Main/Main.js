import { useState } from "react";
import NavigationMain from "./NavigationMain";
import Search from "./Search";
import newImg from "../../imgs/new-image.jpg";
import top1 from "../../imgs/totd1.jpg";
import top2 from "../../imgs/totd2.jpg";
import interestingImg1 from "../../imgs/interesting1.jpg";
import interestingImg2 from "../../imgs/interesting2.jpg";
import interestingImg3 from "../../imgs/interesting3.jpg";
import styles from "./Main.module.scss";
import Article from "./Article";
import TryForFree from "./TryForFree";
import { Fragment } from "react/cjs/react.production.min";
import Loading from "./Loading";

const INFO = "Feb 23 · 8 min read";
const PARAGRAPH =
  "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...";

const DATA = [
  {
    id: "a1",
    category: "new",
    img: newImg,
    head: "Tips & Tricks For Cutting",
    detailedInfo:
      "Pruning, like any other skill, requires knowing what you are doing to achieve success. The old idea that anyone with a chain saw or a pruning saw can be a landscape pruner is far from the truth. More trees are killed or ruined each year from improper pruning than by pests. Remember that pruning is the removal or...",
  },
  {
    id: "a2",
    category: "top",
    img: top1,
    head: "Professional Repot",
    detailedInfo: PARAGRAPH,
  },
  {
    id: "a3",
    category: "top",
    img: top2,
    head: "Professional Repot",
    detailedInfo: PARAGRAPH,
  },
  {
    id: "a4",
    category: "interesting",
    img: interestingImg1,
    head: "Watering mastery",
    detailedInfo: PARAGRAPH,
  },
  {
    id: "a5",
    category: "interesting",
    img: interestingImg2,
    head: "Plant pot secrets",
    detailedInfo: PARAGRAPH,
  },
  {
    id: "a6",
    category: "interesting",
    img: interestingImg3,
    head: "Professional Repot",
    detailedInfo: PARAGRAPH,
  },
  {
    id: "a7",
    category: "interesting",
    img: interestingImg2,
    head: "Plant pot secrets",
    detailedInfo: PARAGRAPH,
  },
  {
    id: "a8",
    category: "interesting",
    img: interestingImg3,
    head: "Professional Repot",
    detailedInfo: PARAGRAPH,
  },
  {
    id: "a9",
    category: "interesting",
    img: interestingImg1,
    head: "Watering mastery",
    detailedInfo: PARAGRAPH,
  },
];

const Main = () => {
  const [isArticleSearched, setIsArticleSearched] = useState(false);
  const [articles, setArticles] = useState(DATA);
  const [searchedArticles, setSearchedArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  window.onscroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight - 1) {
      console.log("at the bottom");
      setIsLoading(true);
      setTimeout(() => {
        setArticles(
          articles.concat([
            {
              id: Math.floor(Math.random()) + articles.length,
              category: "interesting",
              img: interestingImg2,
              head: "Plant pot secrets",
              detailedInfo: PARAGRAPH,
            },
            {
              id: Math.floor(Math.random()) + articles.length,
              category: "interesting",
              img: interestingImg3,
              head: "Professional Repot",
              detailedInfo: PARAGRAPH,
            },
            {
              id: Math.floor(Math.random()) + articles.length,
              category: "interesting",
              img: interestingImg1,
              head: "Watering mastery",
              detailedInfo: PARAGRAPH,
            },
          ])
        );
        setIsLoading(false);
      }, 1500);
    }
  };

  return (
    <main>
      <NavigationMain />
      <Search
        data={articles}
        onSetIsArticleSearched={setIsArticleSearched}
        onSetArticles={setSearchedArticles}
      />
      {isArticleSearched && searchedArticles.length > 0 && (
        <div className={styles.search}>
          {searchedArticles.map((el) => (
            <Article
              key={el.id}
              img={el.img}
              imgName={el.head}
              info={INFO}
              head={el.head}
              detailedInfo={el.detailedInfo}
              isSearched={true}
            />
          ))}
        </div>
      )}
      {isArticleSearched && searchedArticles.length === 0 && (
        <div className={styles["not-found"]}>Not found</div>
      )}
      {!isArticleSearched && (
        <Fragment>
          <div className={styles.new}>
            <div className={styles.text}>New</div>
            <Article
              key={articles[0].id}
              img={articles[0].img}
              imgName={articles[0].head}
              info={INFO}
              head={articles[0].head}
              detailedInfo={articles[0].detailedInfo}
              isNew={true}
            />
          </div>
          <div className={styles.top}>
            <h4 className={styles["section-heading"]}>Top of the Day</h4>
            <div className={styles["top-articles"]}>
              {articles
                .filter((el) => el.category === "top")
                .map((el) => (
                  <Article
                    key={el.id}
                    img={el.img}
                    imgName={el.head}
                    head={el.head}
                    info={INFO}
                    detailedInfo={el.detailedInfo}
                  />
                ))}
            </div>
          </div>
          <div className={styles.interesting}>
            <h4 className={styles["section-heading"]}>Interesting</h4>
            <div className={styles["interesting-articles"]}>
              {articles
                .filter((el) => el.category === "interesting")
                .map((el) => (
                  <Article
                    key={el.id}
                    img={el.img}
                    imgName={el.head}
                    info={INFO}
                    head={el.head}
                    detailedInfo={el.detailedInfo}
                    isInteresting={true}
                  />
                ))}
            </div>
          </div>
          <TryForFree />
          <div className={styles.other}>
            <div className={styles["interesting-articles"]}>
              {articles
                .filter((el) => el.category === "interesting")
                .reverse()
                .map((el) => (
                  <Article
                    key={el.id}
                    img={el.img}
                    imgName={el.head}
                    info={INFO}
                    head={el.head}
                    detailedInfo={el.detailedInfo}
                    isInteresting={true}
                  />
                ))}
            </div>
          </div>
          {isLoading && (
            <div className={styles.loading}>
              <div className={styles["interesting-articles"]}>
                <Loading />
                <Loading />
                <Loading />
              </div>
            </div>
          )}
        </Fragment>
      )}
    </main>
  );
};

export default Main;
