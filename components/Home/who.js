import { getCounts } from "@/store/WhoSlice";
import Image from "next/legacy/image";
import { useSelectedLayoutSegments } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

const Who = ({ styles, Lang }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();

  const { counts } = useSelector((state) => state.WhoSlice);

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
                <h2 className={"mTle"}>
                  {Lang === "ar" ? counts[0]?.head_ar : counts[0]?.head}
                </h2>
              </div>
              <p className={styles.who_p}>
                {" "}
                {Lang === "ar" ? counts[0]?.subhead_ar : counts[0]?.subhead}
              </p>
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
                {/* <source
                  src="http://localhost:7700/who_we_videos/who-1.mp4"
                  type="video/mp4"
                /> */}
                {counts[0]?.videoUrl && (
                  <source
                    src={`${process.env.customKey}/who_we_videos/${counts[0].videoUrl}`}
                    type="video/mp4"
                  />
                )}
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
                        <CountUp
                          enableScrollSpy={true}
                          start={0}
                          end={counts[0] && counts[0]?.experience}
                        />
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
                        <CountUp
                          enableScrollSpy={true}
                          start={0}
                          end={counts[0] && counts[0]?.users}
                        />
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
                        <CountUp
                          enableScrollSpy={true}
                          start={0}
                          end={counts[0] && counts[0]?.courses}
                        />
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
