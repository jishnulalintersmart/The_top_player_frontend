import NewsBox from "@/components/layouts/NewsBox";
import InnerBanner from "/components/layouts/InnerBanner";
import styles from "/styles/News.module.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNewsById } from "@/store/NewsSlice";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getNewsById(news_id)).unwrap();
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    if (news_id) {
      fetchData();
    }
  }, [dispatch]);

  return (
    <div className={styles.program_page}>
      <InnerBanner
        imageUrl={"/images/banner-news.jpg"}
        title={"TRENDING NEWS"}
      />
      <div className={styles.news_detail_section}>
        <div className={"container"}>
          <div className={styles.cntWrap}>
            <h2>{Lang === "ar" ? news?.title_ar : news?.title_en}</h2>
            <div className="info">
              {" "}
              {t("news.postdate")} :{" "}
              {news?.createdAt &&
                format(new Date(news?.createdAt), "dd MMMM yyyy")}
            </div>

            <Swiper
              spaceBetween={10}
              loop={true}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Autoplay]}
              initialSlide={1}
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
            >
              <SwiperSlide>
                <Image
                  src={"/images/news-3.jpg"}
                  alt="news"
                  width={0}
                  height={100}
                  style={{
                    objectFit: "cover",
                  }}
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/images/news-2.jpg"}
                  alt="news"
                  width={0}
                  height={100}
                  layout="responsive"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/images/news-1.jpg"}
                  alt="news"
                  width={0}
                  height={100}
                  style={{
                    objectFit: "cover",
                  }}
                  layout="responsive"
                />
              </SwiperSlide>
            </Swiper>

            <p>{Lang === "ar" ? news?.description_ar : news?.description_en}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
