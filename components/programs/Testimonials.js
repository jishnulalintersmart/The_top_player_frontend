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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTestimonials } from "@/store/TestimonialSlice";

const Testimonials = ({ Lang }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { testimonials } = useSelector(
    (state) => state.TestimonialSlice.testimonials
  );


  useEffect(() => {
    dispatch(getAllTestimonials());
  }, [dispatch]);

  return (
    <div className={styles.testimonials_section}>
      <div className={"container"}>
        <div className={"tleWrap center"}>
          <div className={"mTle"}>{t("testimonials")}</div>
        </div>
      </div>
      <Swiper
        loop={true}
        dir={Lang === "ar" ? "rtl" : "ltr"}
        key={Lang}
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
        {testimonials?.map((testimonial) => (
          <SwiperSlide key={testimonial?.id}>
            <div className={styles.testiBx}>
              <div className={styles.iconWrap}>
                <Rating
                  initialValue={testimonial?.rating}
                  readonly
                  rtl={Lang === "ar" ? true : false}
                  size={16}
                  fillColor={"#FCA34A"}
                />
              </div>
              <div className={styles.cntWrap}>
                <p>
                  {Lang === "ar"
                    ? testimonial?.comment_ar
                    : testimonial?.comment_en}
                </p>
              </div>
              <div className={styles.infoWrap}>
                <div className={styles.tle}>{testimonial?.user_name}</div>
                <div className={styles.sTle}>{testimonial?.user_role}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
