import NewsBox from "@/components/layouts/NewsBox";
import InnerBanner from "/components/layouts/InnerBanner";
import styles from "/styles/News.module.scss";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
const NewsDetail = ({ Lang }) => {
  return (
    <div className={styles.news_detail_page}>
      <InnerBanner
        imageUrl={"/images/banner-news.jpg"}
        title={"TRENDING NEWS"}
      />
      <div className={styles.news_detail_section}>
        <div className={"container"}>
          <div className={styles.cntWrap}>
            <h2>
              Lorem Ipsu is simply dummy text of the printing and <br />{" "}
              typesetting industry.
            </h2>
            <div className={styles.info}>Post Date : 25 March 2024</div>
            <Image
              src={"/images/news-detail-1.jpg"}
              alt="news"
              width={1200}
              height={520}
              layout="responsive"
            />
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.news_section}>
        <div className="container">
            <div className={`${styles.tleWrap} tleWrap`}>
              <h2 className={"mTle"}>Recent News</h2>
            </div>
          <Swiper
            // effect={"fade"}
            loop={false}
            spaceBetween={10}
            slidesPerView={1}
            pagination={false}
            navigation={true}
            initialSlide={1}
            // autoplay={false}
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
      </div>
    </div>
  );
};

export default NewsDetail;
