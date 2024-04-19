import Image from "next/legacy/image";
// import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ReactTyped } from "react-typed";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css/effect-fade';
// import Typewriter from "typewriter-effect";
// import useIntersectionObserver from "@react-hook/intersection-observer";
// import ReactPlayer from "react-player";
// import {
//   ControlBar,
//   CurrentTimeDisplay,
//   ForwardControl,
//   PlayToggle,
//   PlaybackRateMenuButton,
//   Player,
//   ReplayControl,
//   TimeDivider,
//   VolumeMenuButton,
//   FullscreenToggle,
// } from "video-react";

const Suspense = ({ styles, Lang }) => {
  const { t } = useTranslation();
  // const containerRef = useRef();
  // const videoEl = useRef(null);
  // const lockRef = useRef(false);
  // const { isIntersecting } = useIntersectionObserver(containerRef);
  // if (isIntersecting) {
  //   lockRef.current = true;
  // }
  // const videoRef = useRef(null);
  // const [videoPlay, setVideoPlay] = useState(true);

  // const togglePlay = () => {
  //   if (videoRef.current.paused) {
  //     videoRef.current.play();
  //     // setIsPlaying(true);
  //   } else {
  //     videoRef.current.pause();
  //     // setIsPlaying(false);
  //   }
  // };
  return (
    <div className={`${styles.Suspense} margin_top`}>
      <div className={`container`}>
        <div className="row align-items-center justify-content-between ">
          <div className="col-12 col-lg-6">
            <div className={styles.become}>
              <h2>{t("title")}</h2>
              <h4 className={`${styles.become_animation} become_animation`}>
                {t("suspens.become")} &nbsp;
                <span>
                  {Lang === "ar" ? (
                    <ReactTyped
                      strings={[
                        t("suspens.better"),
                        t("suspens.faster"),
                        t("suspens.stronger"),
                      ]}
                      typeSpeed={40}
                      backSpeed={40}
                      backDelay={1500}
                      // startDelay={}
                      loop
                    />
                  ) : (
                    <ReactTyped
                      strings={[
                        t("suspens.theTop"),
                        t("suspens.better"),
                        t("suspens.faster"),
                        t("suspens.stronger"),
                      ]}
                      typeSpeed={40}
                      backSpeed={40}
                      backDelay={1500}
                      // startDelay={}
                      loop
                    />
                  )}

                  {/* <Typewriter
                
                    options={{

                      strings: [
                        t("suspens.theTop"),
                        t("suspens.better"),
                        t("suspens.faster"),
                        t("suspens.stronger"),
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 20,
                    }}
                  /> */}
                </span>
              </h4>
              <p>{t("suspens.intro2")}</p>
              <p>{t("suspens.intro4")}</p>
            </div>
          </div>
          <div className="col-12 col-lg-5  col_video_mobile">
            <Swiper
              // effect={"fade"}
              spaceBetween={0}
              slidesPerView={1}
              pagination={false}
              navigation={false}
              initialSlide={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Autoplay]}
            >
              <SwiperSlide>
                <div
                  className={`${
                    styles.Video_Suspense
                  } Video_Suspense video-container ${
                    Lang === "ar" ? styles.susAr : styles.susEn
                  }`}
                >
                  <Image
                    src={"/images/topPlayer-1.png"}
                    layout="fill"
                    alt="topPlayer"
                    objectFit="contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={`${
                    styles.Video_Suspense
                  } Video_Suspense video-container ${
                    Lang === "ar" ? styles.susAr : styles.susEn
                  }`}
                >
                  <Image
                    src={"/images/topPlayer-1.png"}
                    layout="fill"
                    alt="topPlayer"
                    objectFit="contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={`${
                    styles.Video_Suspense
                  } Video_Suspense video-container ${
                    Lang === "ar" ? styles.susAr : styles.susEn
                  }`}
                >
                  <Image
                    src={"/images/topPlayer-1.png"}
                    layout="fill"
                    alt="topPlayer"
                    objectFit="contain"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
            {/* <Player fluid playsInline={true} autoPlay muted>
                <source
                  src={"https://backend.thetopplayer.com/videos/Suspense.mp4"}
                />
                <ControlBar>
                  <FullscreenToggle className="ToogelFull"  />
                  <CurrentTimeDisplay order={4.1} />
                  <TimeDivider order={4.2} />
                  <PlaybackRateMenuButton
                    rates={[5, 2, 1, 0.5, 0.1]}
                    order={7.1}
                  />
                  <VolumeMenuButton  />
                </ControlBar>
              </Player> */}
            {/* </div> */}
            {/* <div className={styles.Video_Suspense}
             ref={containerRef}>
            {
              lockRef.current &&
              <video 
              ref={videoEl}
              muted autoPlay loop playsInline controls preload="metadata">
              <source
                src="https://backend.thetopplayer.com/videos/Suspense.mp4"
                type="video/mp4"
              />
            </video>

            }
             
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suspense;
