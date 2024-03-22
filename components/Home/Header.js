import Aos from "aos";
import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Header = ({ styles, Lang }) => {
  useEffect(() => {
    Aos.init({ duration: 900 });
  });
  const { t } = useTranslation();

  return (
    <div className="container-fluid">
      <div className={`${styles.Header} `}>
        <div
          className={styles.Header_info}
          // data-aos="fade-up"
          // // data-aos-easing="ease-in-out"
          // // data-aos-mirror="true"
          // data-aos-once="true"
          // data-aos-anchor-placement="top-center"
        >
          <div
            data-aos="fade-up"
            // data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            data-aos-once="true"
          >
            <h1
              // style={{
              //   fontStyle: Lang === "ar" ? "normal" : "italic",
              //   // lineHeight: Lang === "ar"? "normal" :"115px"
              // }}
            >
              {t("title")}
            </h1>
            <h2
              style={{
                marginTop: Lang === "ar" ? "24px" : "48px",
              }}
            >
              {" "}
              {t("header.intro2")}
            </h2>
            <p>{t("header.intro3")}</p>
            <Link href={`/${Lang}#programs`}>
              {t("yalla")}
              <IoIosArrowDroprightCircle
                style={{
                  transform: Lang === "ar" ? "rotate(180deg)" :"rotate(0)" ,
                }}
              />
            </Link>
          </div>
        </div>
        <div className={styles.Image_header}>
          {/* <Image src={"/images/header.png"} alt="Header" layout="fill" objectFit="cover"/> */}
          <video muted autoPlay loop playsInline  preload="metadata">
            <source src="https://backend.thetopplayer.com/videos/header.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Header;
