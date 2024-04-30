import NewsBox from "@/components/layouts/NewsBox";
import InnerBanner from "/components/layouts/InnerBanner";
import styles from "/styles/News.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllNews, getNewsCount } from "@/store/NewsSlice";
import { t } from "i18next";
import LangWrap from "@/components/layouts/LangWarp";
import LangChange from "@/components/layouts/LangChange";
const News = () => {
  const router = useRouter();
  const { Lang } = router.query;

  const [dataCount, setDataCount] = useState(1);

  const dispatch = useDispatch();
  const { allNews, count } = useSelector((state) => state.NewsSlice);
  useEffect(() => {
    dispatch(getNewsCount());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllNews(dataCount));
  }, [dispatch, dataCount]);

  const handleNavigate = (id) => {
    router.push(`/${Lang}/news/${id}`);
  };

  const handleLoadMore = () => {
    setDataCount((prev) => prev + 1);
  };

  return (
    <LangWrap Lang={Lang.toLowerCase()}>
      <LangChange Lang={Lang.toLowerCase()}>
        <div className={styles.program_page}>
          <InnerBanner
            imageUrl={"/images/banner-news.jpg"}
            title={t("news.heading")}
          />
          <div className={styles.news_list_section}>
            <div className={"container"}>
              <div className={`${styles.tleWrap} tleWrap`}>
                <h2 className={"mTle"}>{t("news.heading")}</h2>
              </div>
              <div className={styles.dFlx}>
                {allNews?.news?.map((news) => (
                  <div
                    key={news?.id}
                    className={styles.item}
                    onClick={(e) => handleNavigate(news.id)}
                  >
                    <NewsBox news={news} Lang={Lang} />
                  </div>
                ))}
              </div>
              <div className={styles.btnWrap}>
                <button
                  className={`${styles.baseBtn} baseBtn hoveranim`}
                  aria-label="button"
                  disabled={allNews?.news?.length === count}
                  onClick={handleLoadMore}
                >
                  <span>
                    {allNews?.news?.length === count
                      ? t("news.finished")
                      : t("news.loadmore")}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </LangChange>
    </LangWrap>
  );
};

export default News;
