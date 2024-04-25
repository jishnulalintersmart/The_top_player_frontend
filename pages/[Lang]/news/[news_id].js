import NewsBox from "@/components/layouts/NewsBox";
import InnerBanner from "/components/layouts/InnerBanner";
import styles from "/styles/News.module.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllNews, getNewsById } from "@/store/NewsSlice";
import { useRouter } from "next/router";
import { format } from "date-fns";
import { t } from "i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";

const NewsDetail = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { news_id, Lang } = router.query;
  const { news } = useSelector((state) => state.NewsSlice.singleNews);
  const allnews = useSelector((state) => state.NewsSlice.allNews.news);

  useEffect(() => {
    if (news_id) {
      dispatch(getNewsById(news_id));
      dispatch(getAllNews(1));
    }
  }, [dispatch, news_id]);

  return (
    <div className={styles.news_detail_page}>
      <InnerBanner
        imageUrl={"/images/banner-news.jpg"}
        title={"TRENDING NEWS"}
      />
      <div className={styles.news_detail_section}>
        <div className={"container"}>
          <div className={styles.cntWrap}>
            <h2>{Lang === "ar" ? news?.title_ar : news?.title_en}</h2>
            <div className={styles.info}>
              {" "}
              {t("news.postdate")} :{" "}
              {news?.createdAt &&
                format(new Date(news?.createdAt), "dd MMMM yyyy")}
            </div>

            <Swiper
              dir={Lang === "ar" ? "rtl" : "ltr"}
              key={Lang}
              loop={false}
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Autoplay]}
              initialSlide={1}
              style={{
                padding: 0,
              }}
            >
              {news?.images?.map((item) => (
                <SwiperSlide key={item?.id}>
                  <Image
                    src={`${process.env.customKey}/newsImages/${item?.imageUrl}`}
                    alt="news"
                    width={1200}
                    height={520}
                    style={{
                      objectFit: "cover",
                    }}
                    layout="responsive"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <p>{Lang === "ar" ? news?.description_ar : news?.description_en}</p>
          </div>
        </div>
      </div>
      <div className={styles.news_section}>
        <div className="container">
          <div className={`${styles.tleWrap} tleWrap`}>
            <h2 className={"mTle"}>{t("news.recentnews")}</h2>
          </div>
          <Swiper
            dir={Lang === "ar" ? "rtl" : "ltr"}
            key={Lang}
            loop={false}
            spaceBetween={10}
            slidesPerView={1}
            pagination={false}
            navigation={true}
            initialSlide={1}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1551: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
            }}
            className={"newsSlide"}
          >
            {allnews &&
              allnews
                ?.filter((item) => item.id != news_id)
                ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                ?.slice(0, 3)
                ?.map((news) => (
                  <SwiperSlide
                    key={news.id}
                    onClick={() => router.push(`/${Lang}/news/${news?.id}`)}
                  >
                    <NewsBox Lang={Lang} news={news} />
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
