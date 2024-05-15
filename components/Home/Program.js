import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCourses, getsubscribedCourse } from "@/store/CourcesSlice";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import isExpired from "@/helpers/checkExpired";
const Program = ({ styles, Lang }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { subscribedCourseArr, CoursecArr } = useSelector(
    (state) => state.CourcesSlice
  );
  useEffect(() => {
    dispatch(allCourses());
    dispatch(getsubscribedCourse());
  }, [dispatch]);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  const router = useRouter();
  useEffect(() => {
    if (Cookies.get("UT")) {
      dispatch(getsubscribedCourse())
        .unwrap()
        .then(() => {})
        .catch((err) => {
          if (err?.response?.status === 401) {
            Cookies.remove("UT");
            // router.push(`/${Lang}`);
          }
        });
    }
  }, [dispatch, Lang, router]);
  const Fitness = subscribedCourseArr?.find((ele) => ele.courseId === 1);
  // const Fitness_Fottboll = subscribedCourseArr?.find(
  //   (ele) => ele.courseId === 2
  // );
  // const Football = subscribedCourseArr?.find((ele) => ele.courseId === 3);
  return (
    <div className={`${styles.program_section}`} id="programs">
      <div className="container">
        <div className={"tleWrap"}>
          <h2 className={"mTle"}>{t("programs.title")}</h2>
        </div>
        {CoursecArr?.courses?.map((item) => (
          <div className={styles.itemWrap} key={item?.categoryName}>
            <div className={styles.tleFlx}>
              <div className={styles.top1_titlle}>
                <h3 className={styles.small_title}>{item?.categoryName}</h3>
              </div>
              <div className={styles.rgtSd}>
                <div
                  className={styles.cSlideNav}
                  style={{
                    flexDirection: Lang === "ar" ? "row-reverse" : "row",
                  }}
                >
                  <button
                    className={styles.prev}
                    id={`${item?.categoryName?.replace(/\s/g, "")}_prev`}
                  >
                    <Image
                      src={"/images/icon-rgtArrow.svg"}
                      alt="rgtArrow"
                      layout="fill"
                      objectFit="contain"
                      loading="lazy"
                    />
                  </button>
                  <button
                    className={styles.next}
                    id={`${item?.categoryName?.replace(/\s/g, "")}_next`}
                  >
                    <Image
                      src={"/images/icon-rgtArrow.svg"}
                      alt="rgtArrow"
                      layout="fill"
                      objectFit="contain"
                      loading="lazy"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`${styles.program} ${
                Lang === "ar" ? styles.ar_slide : styles.en_slide
              } ${Lang === "ar" ? "Arabic_web_program" : ""}`}
            >
              <Swiper
                dir={Lang === "ar" ? "rtl" : "ltr"}
                key={"courseSwiper"}
                loop={false}
                spaceBetween={10}
                slidesPerView={1}
                modules={[Pagination, Navigation]}
                preventClicksPropagation={false}
                preventClicks={false}
                pagination={pagination}
                navigation={{
                  nextEl: `#${item?.categoryName?.replace(/\s/g, "")}_next`,
                  prevEl: `#${item?.categoryName?.replace(/\s/g, "")}_prev`,
                }}
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
                {item?.courses?.map((course) => (
                  <SwiperSlide key={course?.id}>
                    <Link
                      style={{
                        direction: Lang === "ar" ? "rtl" : "ltr",
                      }}
                      href={`/${Lang}/user/programs/details/${course?.id}`}
                      // href={
                      //   // Fitness
                      //   // ? `/${Lang}/user/programs/details/${course?.id}` :
                      //   // Cookies.get("UT")
                      //   // ? `/${Lang}/user/payment/1`
                      //   `/${Lang}/user/programs/details/${course?.id}`
                      //   // : `/${Lang}/admin/signup`
                      // }
                      className={styles.card}
                    >
                      {/* <div className={styles.filnal_price}>
                  <p>
                    80 $ - <del>105 $</del>
                  </p>
                </div> */}
                      <div className={styles.filnal_price}>
                        <p>
                          {course?.offerPercentage}%
                          <span>{t("programs.off")}</span>
                        </p>
                      </div>
                      <div className={styles.card_image}>
                        <Image
                          src={`${process.env.customKey}/courseImages/${course?.imageUrl}`}
                          alt="fitness"
                          layout="fill"
                          objectFit="contain"
                          loading="lazy"
                        />
                      </div>
                      <div className={styles.info_card}>
                        {/* <h4>{t("programs.fitness.title")}</h4> */}
                        <h4>
                          {Lang === "ar" ? course?.name_arabic : course?.name}
                        </h4>
                        {course?.descriptionHTML && (
                          <ul
                            className={`${
                              Lang === "ar" ? styles.rightText : styles.leftText
                            }`}
                            dangerouslySetInnerHTML={{
                              __html:
                                Lang === "ar"
                                  ? course?.descriptionHTMLAr
                                  : course?.descriptionHTML,
                            }}
                          ></ul>
                        )}

                        <div
                          className={`${styles.price_offer} ${
                            Lang === "ar" ? styles.rightPrice : styles.leftPrice
                          }`}
                        >
                          <h5>{course?.offerAmount}</h5>
                          <h6>
                            <del>{course?.amount} </del>
                          </h6>
                        </div>

                        {/* {
                          Cookies.get("UT")

                          
                        } */}

                        <button>
                          {subscribedCourseArr?.some(
                            (obj) => obj.courseId == course?.id
                          )
                            ? t("programs.yalla")
                            : t("programs.join")}
                        </button>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
