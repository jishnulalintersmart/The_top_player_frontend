import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getsubscribedCourse } from "@/store/CourcesSlice";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
const Program = ({ styles, Lang }) => {
  // const [fitness]
  const { t } = useTranslation();

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  const dispatch = useDispatch();
  const { subscribedCourseArr } = useSelector((state) => state.CourcesSlice);
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
  const Fitness_Fottboll = subscribedCourseArr?.find(
    (ele) => ele.courseId === 2
  );
  const Football = subscribedCourseArr?.find((ele) => ele.courseId === 3);
  return (
    <div className={`${styles.program_section}`} id="programs">
      <div className="container">
        <div className={"tleWrap"}>
          <h2 className={"mTle"}>{t("programs.title")}</h2>
        </div>
        <div className={styles.itemWrap}>
          <div className={styles.tleFlx}>
            <div className={styles.top1_titlle}>
              <h3 className={styles.small_title}>{t("programs.top")}</h3>
            </div>
            <div className={styles.rgtSd}>
              <div className={styles.cSlideNav} style={{
                    flexDirection: Lang === "ar" ? "row-reverse" : "row",
                  }}>
                <button className={styles.prev} id={"programSlide1_prev"}>
                  <Image
                    src={"/images/icon-rgtArrow.svg"}
                    alt="rgtArrow"
                    layout="fill"
                    objectFit="contain"
                  />
                </button>
                <button className={styles.next} id={"programSlide1_next"}>
                  <Image
                    src={"/images/icon-rgtArrow.svg"}
                    alt="rgtArrow"
                    layout="fill"
                    objectFit="contain"
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
              spaceBetween={10}
              slidesPerView={1}
              modules={[Pagination, Navigation]}
              pagination={pagination}
              navigation={{
                nextEl: "#programSlide1_next",
                prevEl: "#programSlide1_prev"
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
              <SwiperSlide>
                <Link
                  style={{
                    direction: Lang === "ar" ? "rtl" : "ltr",
                  }}
                  href={
                    Fitness
                      ? `/${Lang}/user/programs/details/1`
                      : Cookies.get("UT")
                      ? `/${Lang}/user/payment/1`
                      : `/${Lang}/admin/signup`
                  }
                  className={styles.card}
                >
                  {/* <div className={styles.filnal_price}>
                  <p>
                    80 $ - <del>105 $</del>
                  </p>
                </div> */}
                  <div className={styles.filnal_price}>
                    <p>
                      25%
                      <span>{t("programs.off")}</span>
                    </p>
                  </div>
                  <div className={styles.card_image}>
                    <Image
                      src={"/images/1.png"}
                      alt="fitness"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className={styles.info_card}>
                    <h4>{t("programs.fitness.title")}</h4>

                    <ul
                      className={`${
                        Lang === "ar" ? styles.rightText : styles.leftText
                      }`}
                    >
                      <li>
                        <p>
                          {t("programs.fitness.line1_1")}{" "}
                          <span className="En_num">
                            {t("programs.fitness.line1_2")}
                          </span>
                          {t("programs.fitness.line1_3")}
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="En_num">
                            {t("programs.fitness.line2_1")}
                          </span>
                          {t("programs.fitness.line2_2")}
                          <span className="En_num">
                            {t("programs.fitness.line2_3")}
                          </span>
                          {t("programs.fitness.line2_4")}
                        </p>
                      </li>
                      <li>
                        <p>
                          {t("programs.fitness.line3_1")}
                          <span className="En_num">
                            {t("programs.fitness.line3_2")}
                          </span>
                          {t("programs.fitness.line3_3")}
                        </p>
                      </li>
                      <li>
                        <p>{t("programs.fitness.line4")}</p>
                      </li>
                      <li>
                        <p>
                          {t("programs.fitness.line5_1")}
                          <span className="En_num">
                            {t("programs.fitness.line5_2")}
                          </span>
                          {t("programs.fitness.line5_3")}
                        </p>
                      </li>
                    </ul>
                    <div
                      className={`${styles.price_offer} ${
                        Lang === "ar" ? styles.rightPrice : styles.leftPrice
                      }`}
                    >
                      <h5>80</h5>
                      <h6>
                        <del>105 </del>
                      </h6>
                    </div>
                    <button>
                      {Fitness ? t("programs.yalla") : t("programs.join")}
                    </button>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  style={{
                    direction: Lang === "ar" ? "rtl" : "ltr",
                  }}
                  href={
                    Fitness_Fottboll
                      ? `/${Lang}/user/programs/details/2`
                      : Cookies.get("UT")
                      ? `/${Lang}/user/payment/2`
                      : `/${Lang}/admin/signup`
                  }
                  className={styles.card}
                >
                  <div className={styles.filnal_price}>
                    <p>
                      50%
                      <span>{t("programs.off")}</span>
                    </p>
                  </div>
                  <div className={styles.card_image}>
                    <Image
                      src={"/images/2.png"}
                      alt="fitness + football"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className={styles.info_card}>
                    <h4>
                      {t("programs.fitness_fottboll.title1")} <span>+</span>{" "}
                      {t("programs.fitness_fottboll.title2")}
                    </h4>
                    <ul
                      className={`${
                        Lang === "ar" ? styles.rightText : styles.leftText
                      }`}
                    >
                      <li>
                        <p className="fitness_fottboll_line">
                          {t("programs.fitness_fottboll.line1_1")}
                          <span className="En_num">
                            {t("programs.fitness_fottboll.line1_2")}
                          </span>
                          {t("programs.fitness_fottboll.line1_3")}
                          <br />
                          <span className="En_num">
                            {t("programs.fitness_fottboll.line1_1_1")}
                          </span>
                          {t("programs.fitness_fottboll.line1_1_2")}

                          <br />
                          <span className="En_num">
                            {t("programs.fitness_fottboll.line1_1_3")}
                          </span>
                          {t("programs.fitness_fottboll.line1_1_4")}
                        </p>
                      </li>
                      <li>
                        <p>{t("programs.fitness_fottboll.line2")}</p>
                      </li>
                      <li>
                        <p>{t("programs.fitness_fottboll.line3")}</p>
                      </li>
                      <li>
                        <p>
                          {t("programs.fitness_fottboll.line4_1")}
                          <span className="En_num">
                            {t("programs.fitness_fottboll.line4_2")}
                          </span>
                        </p>
                      </li>
                    </ul>
                    <div
                      className={`${styles.price_offer} ${
                        Lang === "ar" ? styles.rightPrice : styles.leftPrice
                      }`}
                    >
                      <h5>
                        105
                        {/* <span>/4mo</span> */}
                      </h5>
                      <h6>
                        <del>210 </del>
                        {/* <span>/4mo</span> */}
                      </h6>
                    </div>
                    <button>
                      {" "}
                      {Fitness_Fottboll
                        ? t("programs.yalla")
                        : t("programs.join")}
                    </button>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  style={{
                    direction: Lang === "ar" ? "rtl" : "ltr",
                  }}
                  href={
                    Football
                      ? `/${Lang}/user/programs/details/3`
                      : Cookies.get("UT")
                      ? `/${Lang}/user/payment/3`
                      : `/${Lang}/admin/signup`
                  }
                  className={styles.card}
                >
                  <div className={styles.filnal_price}>
                    <p>
                      25%
                      <span>{t("programs.off")}</span>
                    </p>
                  </div>
                  <div className={styles.card_image}>
                    <Image
                      src={"/images/3.png"}
                      alt="football"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className={styles.info_card}>
                    <h4>{t("programs.football.title")}</h4>
                    {/* <div className={styles.price_offer}>
                    <h5>
                      80
                    </h5>
                    <h6>
                      <del>105 </del> 
                    </h6>
                  </div> */}
                    <ul
                      className={`${
                        Lang === "ar" ? styles.rightText : styles.leftText
                      }`}
                    >
                      <li>
                        <p>
                          {t("programs.football.line1_1")}
                          <span className="En_num">
                            {t("programs.football.line1_2")}
                          </span>
                          {t("programs.football.line1_3")}
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="En_num">
                            {t("programs.football.line2_1")}
                          </span>
                          {t("programs.football.line2_2")}
                          <span className="En_num">
                            {t("programs.football.line2_3")}
                          </span>
                          {t("programs.football.line2_4")}
                        </p>
                      </li>
                      <li>
                        <p>
                          {t("programs.football.line3_1")}
                          <span className="En_num">
                            {t("programs.football.line3_2")}
                          </span>
                          {t("programs.football.line3_3")}
                        </p>
                      </li>

                      <li>
                        <p>{t("programs.football.line4")}</p>
                      </li>
                      <li>
                        <p>
                          {t("programs.football.line5_1")}

                          <span className="En_num">
                            {t("programs.football.line5_2")}
                          </span>
                          {t("programs.football.line5_3")}
                        </p>
                      </li>
                    </ul>
                    <div
                      className={`${styles.price_offer} ${
                        Lang === "ar" ? styles.rightPrice : styles.leftPrice
                      }`}
                    >
                      <h5>80</h5>
                      <h6>
                        <del>105 </del>
                      </h6>
                    </div>
                    <button>
                      {" "}
                      {Football ? t("programs.yalla") : t("programs.join")}
                    </button>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  style={{
                    direction: Lang === "ar" ? "rtl" : "ltr",
                  }}
                  href={
                    Fitness
                      ? `/${Lang}/user/programs/details/1`
                      : Cookies.get("UT")
                      ? `/${Lang}/user/payment/1`
                      : `/${Lang}/admin/signup`
                  }
                  className={styles.card}
                >
                  {/* <div className={styles.filnal_price}>
                  <p>
                    80 $ - <del>105 $</del>
                  </p>
                </div> */}
                  <div className={styles.filnal_price}>
                    <p>
                      25%
                      <span>{t("programs.off")}</span>
                    </p>
                  </div>
                  <div className={styles.card_image}>
                    <Image
                      src={"/images/1.png"}
                      alt="fitness"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className={styles.info_card}>
                    <h4>{t("programs.fitness.title")}</h4>

                    <ul
                      className={`${
                        Lang === "ar" ? styles.rightText : styles.leftText
                      }`}
                    >
                      <li>
                        <p>
                          {t("programs.fitness.line1_1")}{" "}
                          <span className="En_num">
                            {t("programs.fitness.line1_2")}
                          </span>
                          {t("programs.fitness.line1_3")}
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="En_num">
                            {t("programs.fitness.line2_1")}
                          </span>
                          {t("programs.fitness.line2_2")}
                          <span className="En_num">
                            {t("programs.fitness.line2_3")}
                          </span>
                          {t("programs.fitness.line2_4")}
                        </p>
                      </li>
                      <li>
                        <p>
                          {t("programs.fitness.line3_1")}
                          <span className="En_num">
                            {t("programs.fitness.line3_2")}
                          </span>
                          {t("programs.fitness.line3_3")}
                        </p>
                      </li>
                      <li>
                        <p>{t("programs.fitness.line4")}</p>
                      </li>
                      <li>
                        <p>
                          {t("programs.fitness.line5_1")}
                          <span className="En_num">
                            {t("programs.fitness.line5_2")}
                          </span>
                          {t("programs.fitness.line5_3")}
                        </p>
                      </li>
                    </ul>
                    <div
                      className={`${styles.price_offer} ${
                        Lang === "ar" ? styles.rightPrice : styles.leftPrice
                      }`}
                    >
                      <h5>80</h5>
                      <h6>
                        <del>105 </del>
                      </h6>
                    </div>
                    <button>
                      {Fitness ? t("programs.yalla") : t("programs.join")}
                    </button>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  style={{
                    direction: Lang === "ar" ? "rtl" : "ltr",
                  }}
                  href={
                    Fitness_Fottboll
                      ? `/${Lang}/user/programs/details/2`
                      : Cookies.get("UT")
                      ? `/${Lang}/user/payment/2`
                      : `/${Lang}/admin/signup`
                  }
                  className={styles.card}
                >
                  <div className={styles.filnal_price}>
                    <p>
                      50%
                      <span>{t("programs.off")}</span>
                    </p>
                  </div>
                  <div className={styles.card_image}>
                    <Image
                      src={"/images/2.png"}
                      alt="fitness + football"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className={styles.info_card}>
                    <h4>
                      {t("programs.fitness_fottboll.title1")} <span>+</span>{" "}
                      {t("programs.fitness_fottboll.title2")}
                    </h4>
                    <ul
                      className={`${
                        Lang === "ar" ? styles.rightText : styles.leftText
                      }`}
                    >
                      <li>
                        <p className="fitness_fottboll_line">
                          {t("programs.fitness_fottboll.line1_1")}
                          <span className="En_num">
                            {t("programs.fitness_fottboll.line1_2")}
                          </span>
                          {t("programs.fitness_fottboll.line1_3")}
                          <br />
                          <span className="En_num">
                            {t("programs.fitness_fottboll.line1_1_1")}
                          </span>
                          {t("programs.fitness_fottboll.line1_1_2")}
                          <br />
                          <span className="En_num">
                            {t("programs.fitness_fottboll.line1_1_3")}
                          </span>
                          {t("programs.fitness_fottboll.line1_1_4")}
                        </p>
                      </li>
                      <li>
                        <p>{t("programs.fitness_fottboll.line2")}</p>
                      </li>
                      <li>
                        <p>{t("programs.fitness_fottboll.line3")}</p>
                      </li>
                      <li>
                        <p>
                          {t("programs.fitness_fottboll.line4_1")}
                          <span className="En_num">
                            {t("programs.fitness_fottboll.line4_2")}
                          </span>
                        </p>
                      </li>
                    </ul>
                    <div
                      className={`${styles.price_offer} ${
                        Lang === "ar" ? styles.rightPrice : styles.leftPrice
                      }`}
                    >
                      <h5>
                        105
                        {/* <span>/4mo</span> */}
                      </h5>
                      <h6>
                        <del>210 </del>
                        {/* <span>/4mo</span> */}
                      </h6>
                    </div>
                    <button>
                      {" "}
                      {Fitness_Fottboll
                        ? t("programs.yalla")
                        : t("programs.join")}
                    </button>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  style={{
                    direction: Lang === "ar" ? "rtl" : "ltr",
                  }}
                  href={
                    Football
                      ? `/${Lang}/user/programs/details/3`
                      : Cookies.get("UT")
                      ? `/${Lang}/user/payment/3`
                      : `/${Lang}/admin/signup`
                  }
                  className={styles.card}
                >
                  <div className={styles.filnal_price}>
                    <p>
                      25%
                      <span>{t("programs.off")}</span>
                    </p>
                  </div>
                  <div className={styles.card_image}>
                    <Image
                      src={"/images/3.png"}
                      alt="football"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className={styles.info_card}>
                    <h4>{t("programs.football.title")}</h4>
                    {/* <div className={styles.price_offer}>
                    <h5>
                      80
                    </h5>
                    <h6>
                      <del>105 </del> 
                    </h6>
                  </div> */}
                    <ul
                      className={`${
                        Lang === "ar" ? styles.rightText : styles.leftText
                      }`}
                    >
                      <li>
                        <p>
                          {t("programs.football.line1_1")}
                          <span className="En_num">
                            {t("programs.football.line1_2")}
                          </span>
                          {t("programs.football.line1_3")}
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="En_num">
                            {t("programs.football.line2_1")}
                          </span>
                          {t("programs.football.line2_2")}
                          <span className="En_num">
                            {t("programs.football.line2_3")}
                          </span>
                          {t("programs.football.line2_4")}
                        </p>
                      </li>
                      <li>
                        <p>
                          {t("programs.football.line3_1")}
                          <span className="En_num">
                            {t("programs.football.line3_2")}
                          </span>
                          {t("programs.football.line3_3")}
                        </p>
                      </li>

                      <li>
                        <p>{t("programs.football.line4")}</p>
                      </li>
                      <li>
                        <p>
                          {t("programs.football.line5_1")}

                          <span className="En_num">
                            {t("programs.football.line5_2")}
                          </span>
                          {t("programs.football.line5_3")}
                        </p>
                      </li>
                    </ul>
                    <div
                      className={`${styles.price_offer} ${
                        Lang === "ar" ? styles.rightPrice : styles.leftPrice
                      }`}
                    >
                      <h5>80</h5>
                      <h6>
                        <del>105 </del>
                      </h6>
                    </div>
                    <button>
                      {" "}
                      {Football ? t("programs.yalla") : t("programs.join")}
                    </button>
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className={styles.itemWrap}>
          <div className={styles.tleFlx}>
            <div className={styles.top1_titlle}>
              <h3 className={styles.small_title}>Top 2</h3>
            </div>
            <div className={styles.rgtSd}>
              <div className={styles.cSlideNav} style={{
                    flexDirection: Lang === "ar" ? "row-reverse" : "row",
                  }}>
                <button className={styles.prev} id={"programSlide2_prev"}>
                  <Image
                    src={"/images/icon-rgtArrow.svg"}
                    alt="rgtArrow"
                    layout="fill"
                    objectFit="contain"
                  />
                </button>
                <button className={styles.next} id={"programSlide2_next"}>
                  <Image
                    src={"/images/icon-rgtArrow.svg"}
                    alt="rgtArrow"
                    layout="fill"
                    objectFit="contain"
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
              spaceBetween={10}
              slidesPerView={1}
              modules={[Pagination, Navigation]}
              pagination={pagination}
              navigation={{
                nextEl: "#programSlide2_next",
                prevEl: "#programSlide2_prev"
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
              <SwiperSlide>
                <Link
                  style={{
                    direction: Lang === "ar" ? "rtl" : "ltr",
                  }}
                  href={
                    Fitness
                      ? `/${Lang}/user/programs/details/1`
                      : Cookies.get("UT")
                      ? `/${Lang}/user/payment/1`
                      : `/${Lang}/admin/signup`
                  }
                  className={styles.card}
                >
                  {/* <div className={styles.filnal_price}>
                  <p>
                    80 $ - <del>105 $</del>
                  </p>
                </div> */}
                  <div className={styles.filnal_price}>
                    <p>
                      25%
                      <span>{t("programs.off")}</span>
                    </p>
                  </div>
                  <div className={styles.card_image}>
                    <Image
                      src={"/images/1.png"}
                      alt="fitness"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className={styles.info_card}>
                    <h4>{t("programs.fitness.title")}</h4>

                    <ul
                      className={`${
                        Lang === "ar" ? styles.rightText : styles.leftText
                      }`}
                    >
                      <li>
                        <p>
                          {t("programs.fitness.line1_1")}{" "}
                          <span className="En_num">
                            {t("programs.fitness.line1_2")}
                          </span>
                          {t("programs.fitness.line1_3")}
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="En_num">
                            {t("programs.fitness.line2_1")}
                          </span>
                          {t("programs.fitness.line2_2")}
                          <span className="En_num">
                            {t("programs.fitness.line2_3")}
                          </span>
                          {t("programs.fitness.line2_4")}
                        </p>
                      </li>
                      <li>
                        <p>
                          {t("programs.fitness.line3_1")}
                          <span className="En_num">
                            {t("programs.fitness.line3_2")}
                          </span>
                          {t("programs.fitness.line3_3")}
                        </p>
                      </li>
                      <li>
                        <p>{t("programs.fitness.line4")}</p>
                      </li>
                      <li>
                        <p>
                          {t("programs.fitness.line5_1")}
                          <span className="En_num">
                            {t("programs.fitness.line5_2")}
                          </span>
                          {t("programs.fitness.line5_3")}
                        </p>
                      </li>
                    </ul>
                    <div
                      className={`${styles.price_offer} ${
                        Lang === "ar" ? styles.rightPrice : styles.leftPrice
                      }`}
                    >
                      <h5>80</h5>
                      <h6>
                        <del>105 </del>
                      </h6>
                    </div>
                    <button>
                      {Fitness ? t("programs.yalla") : t("programs.join")}
                    </button>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  style={{
                    direction: Lang === "ar" ? "rtl" : "ltr",
                  }}
                  href={
                    Fitness_Fottboll
                      ? `/${Lang}/user/programs/details/2`
                      : Cookies.get("UT")
                      ? `/${Lang}/user/payment/2`
                      : `/${Lang}/admin/signup`
                  }
                  className={styles.card}
                >
                  <div className={styles.filnal_price}>
                    <p>
                      50%
                      <span>{t("programs.off")}</span>
                    </p>
                  </div>
                  <div className={styles.card_image}>
                    <Image
                      src={"/images/2.png"}
                      alt="fitness + football"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className={styles.info_card}>
                    <h4>
                      {t("programs.fitness_fottboll.title1")} <span>+</span>{" "}
                      {t("programs.fitness_fottboll.title2")}
                    </h4>
                    <ul
                      className={`${
                        Lang === "ar" ? styles.rightText : styles.leftText
                      }`}
                    >
                      <li>
                        <p className="fitness_fottboll_line">
                          {t("programs.fitness_fottboll.line1_1")}
                          <span className="En_num">
                            {t("programs.fitness_fottboll.line1_2")}
                          </span>
                          {t("programs.fitness_fottboll.line1_3")}
                          <br />
                          <span className="En_num">
                            {t("programs.fitness_fottboll.line1_1_1")}
                          </span>
                          {t("programs.fitness_fottboll.line1_1_2")}
                          <br />
                          <span className="En_num">
                            {t("programs.fitness_fottboll.line1_1_3")}
                          </span>
                          {t("programs.fitness_fottboll.line1_1_4")}
                        </p>
                      </li>
                      <li>
                        <p>{t("programs.fitness_fottboll.line2")}</p>
                      </li>
                      <li>
                        <p>{t("programs.fitness_fottboll.line3")}</p>
                      </li>
                      <li>
                        <p>
                          {t("programs.fitness_fottboll.line4_1")}
                          <span className="En_num">
                            {t("programs.fitness_fottboll.line4_2")}
                          </span>
                        </p>
                      </li>
                    </ul>
                    <div
                      className={`${styles.price_offer} ${
                        Lang === "ar" ? styles.rightPrice : styles.leftPrice
                      }`}
                    >
                      <h5>
                        105
                        {/* <span>/4mo</span> */}
                      </h5>
                      <h6>
                        <del>210 </del>
                        {/* <span>/4mo</span> */}
                      </h6>
                    </div>
                    <button>
                      {" "}
                      {Fitness_Fottboll
                        ? t("programs.yalla")
                        : t("programs.join")}
                    </button>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  style={{
                    direction: Lang === "ar" ? "rtl" : "ltr",
                  }}
                  href={
                    Football
                      ? `/${Lang}/user/programs/details/3`
                      : Cookies.get("UT")
                      ? `/${Lang}/user/payment/3`
                      : `/${Lang}/admin/signup`
                  }
                  className={styles.card}
                >
                  <div className={styles.filnal_price}>
                    <p>
                      25%
                      <span>{t("programs.off")}</span>
                    </p>
                  </div>
                  <div className={styles.card_image}>
                    <Image
                      src={"/images/3.png"}
                      alt="football"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className={styles.info_card}>
                    <h4>{t("programs.football.title")}</h4>
                    {/* <div className={styles.price_offer}>
                    <h5>
                      80
                    </h5>
                    <h6>
                      <del>105 </del> 
                    </h6>
                  </div> */}
                    <ul
                      className={`${
                        Lang === "ar" ? styles.rightText : styles.leftText
                      }`}
                    >
                      <li>
                        <p>
                          {t("programs.football.line1_1")}
                          <span className="En_num">
                            {t("programs.football.line1_2")}
                          </span>
                          {t("programs.football.line1_3")}
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="En_num">
                            {t("programs.football.line2_1")}
                          </span>
                          {t("programs.football.line2_2")}
                          <span className="En_num">
                            {t("programs.football.line2_3")}
                          </span>
                          {t("programs.football.line2_4")}
                        </p>
                      </li>
                      <li>
                        <p>
                          {t("programs.football.line3_1")}
                          <span className="En_num">
                            {t("programs.football.line3_2")}
                          </span>
                          {t("programs.football.line3_3")}
                        </p>
                      </li>

                      <li>
                        <p>{t("programs.football.line4")}</p>
                      </li>
                      <li>
                        <p>
                          {t("programs.football.line5_1")}

                          <span className="En_num">
                            {t("programs.football.line5_2")}
                          </span>
                          {t("programs.football.line5_3")}
                        </p>
                      </li>
                    </ul>
                    <div
                      className={`${styles.price_offer} ${
                        Lang === "ar" ? styles.rightPrice : styles.leftPrice
                      }`}
                    >
                      <h5>80</h5>
                      <h6>
                        <del>105 </del>
                      </h6>
                    </div>
                    <button>
                      {" "}
                      {Football ? t("programs.yalla") : t("programs.join")}
                    </button>
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
