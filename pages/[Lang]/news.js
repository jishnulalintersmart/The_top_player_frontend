import NewsBox from "@/components/layouts/NewsBox";
import InnerBanner from "/components/layouts/InnerBanner";
import styles from "/styles/News.module.scss";
const News = ({ Lang }) => {
  return (
    <div className={styles.program_page}>
      <InnerBanner
        imageUrl={"/images/banner-news.jpg"}
        title={"TRENDING NEWS"}
      />
      <div className={styles.news_list_section}>
        <div className={"container"}>
          <div className={`${styles.tleWrap} tleWrap`}>
            <h2 className={"mTle"}>TRENDING NEWS</h2>
          </div>
          <div className={styles.dFlx}>
            <div className={styles.item}>
              <NewsBox
                imageUrl={"/images/news-1.jpg"}
                title={"Lorem Ipsum is simply dummy text of the printing."}
                info={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                }
                postDate={"25 March 2024"}
              />
            </div>
            <div className={styles.item}>
              <NewsBox
                imageUrl={"/images/news-2.jpg"}
                title={"Lorem Ipsum is simply dummy text of the printing."}
                info={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                }
                postDate={"25 March 2024"}
              />
            </div>
            <div className={styles.item}>
              <NewsBox
                imageUrl={"/images/news-3.jpg"}
                title={"Lorem Ipsum is simply dummy text of the printing."}
                info={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                }
                postDate={"25 March 2024"}
              />
            </div>
            <div className={styles.item}>
              <NewsBox
                imageUrl={"/images/news-1.jpg"}
                title={"Lorem Ipsum is simply dummy text of the printing."}
                info={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                }
                postDate={"25 March 2024"}
              />
            </div>
            <div className={styles.item}>
              <NewsBox
                imageUrl={"/images/news-2.jpg"}
                title={"Lorem Ipsum is simply dummy text of the printing."}
                info={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                }
                postDate={"25 March 2024"}
              />
            </div>
            <div className={styles.item}>
              <NewsBox
                imageUrl={"/images/news-3.jpg"}
                title={"Lorem Ipsum is simply dummy text of the printing."}
                info={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                }
                postDate={"25 March 2024"}
              />
            </div>
            <div className={styles.item}>
              <NewsBox
                imageUrl={"/images/news-1.jpg"}
                title={"Lorem Ipsum is simply dummy text of the printing."}
                info={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                }
                postDate={"25 March 2024"}
              />
            </div>
            <div className={styles.item}>
              <NewsBox
                imageUrl={"/images/news-2.jpg"}
                title={"Lorem Ipsum is simply dummy text of the printing."}
                info={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                }
                postDate={"25 March 2024"}
              />
            </div>
            <div className={styles.item}>
              <NewsBox
                imageUrl={"/images/news-3.jpg"}
                title={"Lorem Ipsum is simply dummy text of the printing."}
                info={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                }
                postDate={"25 March 2024"}
              />
            </div>
            <div className={styles.item}>
              <NewsBox
                imageUrl={"/images/news-1.jpg"}
                title={"Lorem Ipsum is simply dummy text of the printing."}
                info={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                }
                postDate={"25 March 2024"}
              />
            </div>
            <div className={styles.item}>
              <NewsBox
                imageUrl={"/images/news-2.jpg"}
                title={"Lorem Ipsum is simply dummy text of the printing."}
                info={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                }
                postDate={"25 March 2024"}
              />
            </div>
            <div className={styles.item}>
              <NewsBox
                imageUrl={"/images/news-3.jpg"}
                title={"Lorem Ipsum is simply dummy text of the printing."}
                info={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                }
                postDate={"25 March 2024"}
              />
            </div>
          </div>
          <div className={styles.btnWrap}>
            <button className={`${styles.baseBtn} baseBtn hoveranim`} aria-label="button">
              <span>Load More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
