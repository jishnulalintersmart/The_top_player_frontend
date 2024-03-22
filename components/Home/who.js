import Image from "next/legacy/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const Who = ({ styles, Lang }) => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <div className="container-xxl margin_top" id="about">
      {/* <div className={`title`}>
      <p>about us</p>
      <h2>Who Are We ?</h2>
      </div> */}
      <div className="row align-items-center justify-content-between ">
        <div className="col-md-5">
          <div className={styles.main_who}>
            <h2 className="title who_title">{t("who.title")}</h2>
            <div
              className={styles.image_arrow}
              style={{
                transform: Lang === "ar" ? "rotate(180deg)" : "rotate(0)",
              }}
            >
              <Image
              priority
                src="/images/who1.svg"
                alt="arrow1"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <p className={styles.who_p}>{t("who.about")}</p>
        </div>
        <div className="col-md-5">
          {/* <div className="row">
            <div className={`col-6 ${styles.mt_mob}`}
            data-aos="fade-right"
            data-aos-once="true"
            >
              <div className={styles.who_type}>
                <h3>Football</h3>
              </div>
             <div className={`${styles.who_Image} mt-3`}>
              <Image src={"/images/who1.png"} alt="who1" layout="fill" objectFit="cover" />
             </div>
            </div>
            <div  className={`col-6 ${styles.mt_mob}`}
            data-aos="fade-left"
            data-aos-once="true"
            >
            <div className={`${styles.who_Image} mb-3`}>
              <Image src={"/images/who2.png"} alt="who1" layout="fill" objectFit="cover" />
             </div>
              <div className={styles.who_type}>
                <h3>Fitness</h3>
              </div>
            </div>
          </div> */}

          <div
            className={styles.who_Image}
            style={{
              marginLeft: Lang === "ar" ? "0" : "auto",
              marginRight: Lang === "ar" ? "auto" : "0",
            }}
          >
            <div className={`${styles.who_Image} ${Lang === "ar" ? "" :styles.rotate_image}`}>
              <Image
              // className={styles.rotate_image}
              priority
                src={"/images/who_main.jpg"}
                alt="Who are we"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div
              className={styles.arrow2}
              style={{
                right: Lang === "ar" ? 0 : "unset",
                left: Lang === "ar" ? "unset" : 0,
                transform:
                  Lang === "ar"
                    ? "translateX(100%) rotate(180deg)"
                    : "translateX(-100%) rotate(0deg)",
              }}
            >
              <Image
                src={"/images/who2.svg"}
                alt="Who are we"
                layout="fill"
                objectFit="contain"
              />
            </div>
            {/* <div className={styles.arrow3}>
              <Image
                src={"/images/who3.svg"}
                alt="Who are we"
                layout="fill"
                objectFit="contain"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
