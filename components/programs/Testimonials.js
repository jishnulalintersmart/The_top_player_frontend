import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "@/styles/Program.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Rating } from "react-simple-star-rating";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = ({ Lang }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.testimonials_section}>
      <div className={"container"}>
        <div className={"tleWrap center"}>
          <div className={"mTle"}>TESTIMONIALS</div>
        </div>
      </div>
      <Swiper
        loop={true}
        slidesPerView={"auto"}
        spaceBetween={0}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className={"testiSlide"}
      >
        <SwiperSlide>
          <div className={styles.testiBx}>
            <div className={styles.iconWrap}>
              <Rating
                initialValue={5}
                readonly
                rtl={Lang === "ar" ? true : false}
                size={16}
                fillColor={"#FCA34A"}
              />
            </div>
            <div className={styles.cntWrap}>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </p>
            </div>
            <div className={styles.infoWrap}>
              <div className={styles.tle}>John Doe</div>
              <div className={styles.sTle}>Fitness Student</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.testiBx}>
            <div className={styles.iconWrap}>
              <Rating
                initialValue={5}
                readonly
                rtl={Lang === "ar" ? true : false}
                size={16}
                fillColor={"#FCA34A"}
              />
            </div>
            <div className={styles.cntWrap}>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </p>
            </div>
            <div className={styles.infoWrap}>
              <div className={styles.tle}>John Doe</div>
              <div className={styles.sTle}>Fitness Student</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.testiBx}>
            <div className={styles.iconWrap}>
              <Rating
                initialValue={5}
                readonly
                rtl={Lang === "ar" ? true : false}
                size={16}
                fillColor={"#FCA34A"}
              />
            </div>
            <div className={styles.cntWrap}>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </p>
            </div>
            <div className={styles.infoWrap}>
              <div className={styles.tle}>John Doe</div>
              <div className={styles.sTle}>Fitness Student</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.testiBx}>
            <div className={styles.iconWrap}>
              <Rating
                initialValue={5}
                readonly
                rtl={Lang === "ar" ? true : false}
                size={16}
                fillColor={"#FCA34A"}
              />
            </div>
            <div className={styles.cntWrap}>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </p>
            </div>
            <div className={styles.infoWrap}>
              <div className={styles.tle}>John Doe</div>
              <div className={styles.sTle}>Fitness Student</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.testiBx}>
            <div className={styles.iconWrap}>
              <Rating
                initialValue={5}
                readonly
                rtl={Lang === "ar" ? true : false}
                size={16}
                fillColor={"#FCA34A"}
              />
            </div>
            <div className={styles.cntWrap}>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </p>
            </div>
            <div className={styles.infoWrap}>
              <div className={styles.tle}>John Doe</div>
              <div className={styles.sTle}>Fitness Student</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.testiBx}>
            <div className={styles.iconWrap}>
              <Rating
                initialValue={5}
                readonly
                rtl={Lang === "ar" ? true : false}
                size={16}
                fillColor={"#FCA34A"}
              />
            </div>
            <div className={styles.cntWrap}>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </p>
            </div>
            <div className={styles.infoWrap}>
              <div className={styles.tle}>John Doe</div>
              <div className={styles.sTle}>Fitness Student</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.testiBx}>
            <div className={styles.iconWrap}>
              <Rating
                initialValue={5}
                readonly
                rtl={Lang === "ar" ? true : false}
                size={16}
                fillColor={"#FCA34A"}
              />
            </div>
            <div className={styles.cntWrap}>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </p>
            </div>
            <div className={styles.infoWrap}>
              <div className={styles.tle}>John Doe</div>
              <div className={styles.sTle}>Fitness Student</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
