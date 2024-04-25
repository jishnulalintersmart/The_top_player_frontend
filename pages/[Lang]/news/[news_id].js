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

  console.log(news?.images);
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
      {/* <div className={styles.news_section}>
        <div className="container">
            <div className={`${styles.tleWrap} tleWrap`}>
              <h2 className={"mTle"}>Recent News</h2>
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
            <SwiperSlide>
              <NewsBox
                imageUrl={"/images/news-1.jpg"}
                title={"Lorem Ipsum is simply dummy text of the printing."}
                info={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                }
                postDate={"25 March 2024"}
                Lang={Lang}
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsBox
                imageUrl={"/images/news-2.jpg"}
                title={"Lorem Ipsum is simply dummy text of the printing."}
                info={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                }
                postDate={"25 March 2024"}
                Lang={Lang}
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsBox
                imageUrl={"/images/news-3.jpg"}
                title={"Lorem Ipsum is simply dummy text of the printing."}
                info={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                }
                postDate={"25 March 2024"}
                Lang={Lang}
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsBox
                imageUrl={"/images/news-1.jpg"}
                title={"Lorem Ipsum is simply dummy text of the printing."}
                info={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                }
                postDate={"25 March 2024"}
                Lang={Lang}
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsBox
                imageUrl={"/images/news-2.jpg"}
                title={"Lorem Ipsum is simply dummy text of the printing."}
                info={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                }
                postDate={"25 March 2024"}
                Lang={Lang}
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsBox
                imageUrl={"/images/news-3.jpg"}
                title={"Lorem Ipsum is simply dummy text of the printing."}
                info={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                }
                postDate={"25 March 2024"}
                Lang={Lang}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div> */}
    </div>
  );
};

export default NewsDetail;
