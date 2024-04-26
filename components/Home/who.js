import { getCounts } from "@/store/WhoSlice";
import Image from "next/legacy/image";
import { useSelectedLayoutSegments } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

const Who = ({ styles, Lang }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();
  const countUpRef = useRef();

  const counts = useSelector((state) => state.WhoSlice.counts.data);

  console.log(counts);

  useEffect(() => {
    dispatch(getCounts());
  }, []);

  return (
    <div className={styles.who_section} id={"about"}>
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
                        data-target={counts && counts[0]?.experience}
                      >
                        <CountUp
                          enableScrollSpy={true}
                          redraw={true}
                          start={0}
                          end={counts && counts[0]?.experience}
                        >
                          {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
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
                        data-target={counts && counts[0]?.users}
                      >
                        <CountUp
                          enableScrollSpy={true}
                          redraw={true}
                          start={0}
                          end={counts && counts[0]?.users}
                        >
                          {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
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
                        data-target={counts && counts[0]?.courses}
                      >
                        <CountUp
                          enableScrollSpy={true}
                          redraw={true}
                          start={0}
                          scrollSpyDelay={100}
                          end={counts && counts[0]?.courses}
                        >
                          {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
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
