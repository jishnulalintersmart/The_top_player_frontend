import Image from "next/legacy/image";
import { useRouter } from "next/router";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const Who = ({ styles, Lang }) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div className={styles.who_section} id={"about"}>
      <h1>
        <CountUp enableScrollSpy={true} start={0} end={160526} />

        <CountUp start={0} end={100} delay={0}>
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
      </h1>
      <div className={styles.dElmt_1}>
        <Image
          src={"/images/dElmt-countBg-1.svg"}
          layout="fill"
          alt="bg"
          objectFit="contain"
        />
      </div>
      <div className="container">
        <div className={styles.dFlx}>
          <div className={styles.w_100}>
            <div className={styles.cntWrap}>
              <div className={"tleWrap center"}>
                <h2 className={"mTle"}>{t("who.title")}</h2>
              </div>
              <p className={styles.who_p}>{t("who.about")}</p>
            </div>
          </div>
          <div className={styles.lftSd}>
            <div className={styles.imgWrap}>
              <video
                muted
                autoPlay
                loop
                playsInline
                preload="metadata"
                aria-label="Video player"
              >
                <source src="/videos/who-1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className={styles.rgtSd}>
            <div className={styles.itemFlx}>
              <div className={styles.item}>
                <div className={styles.countBx}>
                  <div className={styles.dElmt_1}>
                    <Image
                      src={"/images/dElmt-countBg-1.svg"}
                      layout="fill"
                      alt="bg"
                      objectFit="contain"
                    />
                  </div>
                  <div className={styles.dElmt_2}>
                    <Image
                      src={"/images/dElmt-countBg-2.png"}
                      layout="fill"
                      alt="bg"
                      objectFit="contain"
                    />
                  </div>
                  <span className={styles.iconWrap}>
                    <Image
                      src={"/images/icon-exp.svg"}
                      alt="exp"
                      layout="fill"
                      objectFit="contain"
                    />
                  </span>
                  <span className={styles.cntWrap}>
                    <h3 className={styles.num} style={{ direction: "ltr" }}>
                      <span
                        className={`${styles.counter} counter`}
                        data-target={"14"}
                      >
                        <CountUp enableScrollSpy={true} start={0} end={14} />
                      </span>
                    </h3>
                    <div className={styles.txt}>{t("who.experience")}</div>
                  </span>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.countBx}>
                  <div className={styles.dElmt_1}>
                    <Image
                      src={"/images/dElmt-countBg-1.svg"}
                      layout="fill"
                      alt="bg"
                      objectFit="contain"
                    />
                  </div>
                  <div className={styles.dElmt_2}>
                    <Image
                      src={"/images/dElmt-countBg-2.png"}
                      layout="fill"
                      alt="bg"
                      objectFit="contain"
                    />
                  </div>
                  <span className={styles.iconWrap}>
                    <Image
                      src={"/images/icon-users.svg"}
                      alt="exp"
                      layout="fill"
                      objectFit="contain"
                    />
                  </span>
                  <span className={styles.cntWrap}>
                    <h3 className={styles.num} style={{ direction: "ltr" }}>
                      <span
                        className={`${styles.counter} counter`}
                        data-target={"10"}
                      >
                        <CountUp enableScrollSpy={true} start={0} end={10} />
                      </span>
                      K+
                    </h3>
                    <div className={styles.txt}>{t("who.users")}</div>
                  </span>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.countBx}>
                  <div className={styles.dElmt_1}>
                    <Image
                      src={"/images/dElmt-countBg-1.svg"}
                      layout="fill"
                      alt="bg"
                      objectFit="contain"
                    />
                  </div>
                  <div className={styles.dElmt_2}>
                    <Image
                      src={"/images/dElmt-countBg-2.png"}
                      layout="fill"
                      alt="bg"
                      objectFit="contain"
                    />
                  </div>
                  <span className={styles.iconWrap}>
                    <Image
                      src={"/images/icon-courses.svg"}
                      alt="exp"
                      layout="fill"
                      objectFit="contain"
                    />
                  </span>
                  <span className={styles.cntWrap}>
                    <h3 className={styles.num} style={{ direction: "ltr" }}>
                      <span
                        className={`${styles.counter} counter`}
                        data-target={"10"}
                      >
                        <CountUp enableScrollSpy={true} start={0} end={10} />
                      </span>
                      +
                    </h3>
                    <div className={styles.txt}>{t("who.courses")}</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
