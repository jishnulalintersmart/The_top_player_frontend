import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "@/styles/Program.module.scss";

const Personlized = ({ Lang }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.personlized_section}>
      <div className={"container"}>
        <div className={"tleWrap"}>
          <h2 className={"mTle"}>{t("programs_details.personal")}</h2>
        </div>
        <div className={styles.dFlx}>
          <div className={styles.lftSd}>
            <div
              className={`${styles.wkBoxDFlx} ${
                Lang === "ar" ? styles.ar : styles.en
              }`}
            >
              <div className={styles.item}>
                <div className={styles.wkBox}>
                  <div className={styles.tleWrap}>
                    <div className={styles.icon}>
                      <Image
                        src={"/images/icon-wk-1.svg"}
                        alt="news"
                        width={40}
                        height={40}
                        layout="responsive"
                        objectFit="contain"
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.tle}>
                      <h4>
                        {t("programs_details.weeks.week1")}
                        <span>1</span>
                      </h4>
                    </div>
                    <div className={styles.line}>
                      <span></span>
                    </div>
                  </div>
                  <div className={styles.cntOuter}>
                    <div className={styles.cntWrap}>
                      <div className={styles.dElmt}>
                        <Image
                          src={"/images/dElmt-countBg-1.svg"}
                          alt="fitness"
                          width={380}
                          height={520}
                          layout="responsive"
                          objectFit="contain"
                          loading="lazy"
                        />
                      </div>
                      <h5>{t("programs_details.weeks.title1")}</h5>
                      <p>{t("programs_details.weeks.description1")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.wkBox}>
                  <div className={styles.tleWrap}>
                    <div className={styles.icon}>
                      <Image
                        src={"/images/icon-wk-2.svg"}
                        alt="news"
                        width={40}
                        height={40}
                        layout="responsive"
                        objectFit="contain"
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.tle}>
                      <h4>
                        {t("programs_details.weeks.week2")}
                        <span>2</span>
                      </h4>
                    </div>
                    <div className={styles.line}>
                      <span></span>
                    </div>
                  </div>
                  <div className={styles.cntOuter}>
                    <div className={styles.cntWrap}>
                      <div className={styles.dElmt}>
                        <Image
                          src={"/images/dElmt-countBg-1.svg"}
                          alt="fitness"
                          width={380}
                          height={520}
                          layout="responsive"
                          objectFit="contain"
                          loading="lazy"
                        />
                      </div>
                      <h5>{t("programs_details.weeks.title2")}</h5>
                      <p>{t("programs_details.weeks.description2")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.wkBox}>
                  <div className={styles.tleWrap}>
                    <div className={styles.icon}>
                      <Image
                        src={"/images/icon-wk-3.svg"}
                        alt="news"
                        width={40}
                        height={40}
                        layout="responsive"
                        objectFit="contain"
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.tle}>
                      <h4>
                        {t("programs_details.weeks.week3")}
                        <span>3</span>
                      </h4>
                    </div>
                    <div className={styles.line}>
                      <span></span>
                    </div>
                  </div>
                  <div className={styles.cntOuter}>
                    <div className={styles.cntWrap}>
                      <div className={styles.dElmt}>
                        <Image
                          src={"/images/dElmt-countBg-1.svg"}
                          alt="fitness"
                          width={380}
                          height={520}
                          layout="responsive"
                          objectFit="contain"
                          loading="lazy"
                        />
                      </div>
                      <h5>{t("programs_details.weeks.title3")}</h5>
                      <p>{t("programs_details.weeks.description3")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.wkBox}>
                  <div className={styles.tleWrap}>
                    <div className={styles.icon}>
                      <Image
                        src={"/images/icon-wk-4.svg"}
                        alt="news"
                        width={40}
                        height={40}
                        layout="responsive"
                        objectFit="cover"
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.tle}>
                      <h4>
                        {t("programs_details.weeks.week4")}
                        <span>4</span>
                      </h4>
                    </div>
                    <div className={styles.line}>
                      <span></span>
                    </div>
                  </div>
                  <div className={styles.cntOuter}>
                    <div className={styles.cntWrap}>
                      <div className={styles.dElmt}>
                        <Image
                          src={"/images/dElmt-countBg-1.svg"}
                          alt="fitness"
                          width={380}
                          height={520}
                          layout="responsive"
                          objectFit="contain"
                          loading="lazy"
                        />
                      </div>
                      <h5>{t("programs_details.weeks.title4")}</h5>
                      <p>{t("programs_details.weeks.description4")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rgtSd}>
            <div className={styles.imgWrap}>
              <video
                muted
                autoPlay
                loop
                playsInline
                preload="metadata"
                aria-label="video player"
              >
                <source
                  src="https://backend.thetopplayer.com/courseImages/video-1715945249482.mov"
                  type="video/mp4"
                />
                {/* <source src="/videos/programVideo.mp4" type="video/mp4" /> */}
              </video>
            </div>
          </div>
        </div>
        {/* <div className={Lang === "ar" ? "progrss_ar" : "progrss_en"}>
          <div className={styles.Personlized}>
            <h2 className="title">{t("programs_details.personal")}</h2>
            <div
              className={`${styles.progress_bar} ${
                Lang === "ar" ? styles.Ar_progress_bar : ""
              }`}
            > */}
      </div>
    </div>
  );
};

export default Personlized;
