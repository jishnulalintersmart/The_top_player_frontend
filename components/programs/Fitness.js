import Image from "next/legacy/image";
import { useTranslation } from "react-i18next";
import { FaDumbbell } from "react-icons/fa";

const FitnessProgram = ({ styles, Lang }) => {
  const { t } = useTranslation();
  return (
    <div className={Lang === "ar" ? "progrss_ar" : "progrss_en"}>
      <div className="row align-items-center justify-content-between ">
        <div className="col-md-8">
          <h1
            className="title"
            style={{
              lineHeight: Lang === "ar" ? "normal" : "38px",
            }}
          >
            {t("programs_details.fitness.title")}
          </h1>
          {/* <p className={styles.program_p}>
            Grain access to fitness exercises for 3 months
            </p> */}
          <p className={styles.program_p_2}>{t("programs_details.contain")}</p>

          <div className={`${styles.Program} ${Lang === "ar" ? styles.Ar_program : ""}`}>
            <ul>
              <li>
                <div className={styles.check}>
                  <span>
                    <FaDumbbell />
                  </span>
                  <p>
                    {t("programs.fitness.line1_1")} <span className="En_num">{t("programs.fitness.line1_2")}</span>
                    {t("programs.fitness.line1_3")}
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.check}>
                  <span>
                    <FaDumbbell />
                  </span>
                  <p>
                    <span className="En_num">{t("programs.fitness.line2_1")}</span>
                    {t("programs.fitness.line2_2")}
                    <span className="En_num">{t("programs.fitness.line2_3")}</span>
                    {t("programs.fitness.line2_4")}
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.check}>
                  <span>
                    <FaDumbbell />
                  </span>
                  <p>
                    {t("programs.fitness.line3_1")}
                    <span className="En_num">{t("programs.fitness.line3_2")}</span>
                    {t("programs.fitness.line3_3")}
                  </p>
                </div>
              </li>

              <li>
                <div className={styles.check}>
                  <span>
                    <FaDumbbell />
                  </span>
                  <p>{t("programs_details.fitness.line4")}</p>
                </div>
              </li>
              <li>
                <div className={styles.check}>
                  <span>
                    <FaDumbbell />
                  </span>
                  <p>
                    {t("programs.fitness.line5_1")}
                    <span className="En_num">{t("programs.fitness.line5_2")}</span>
                    {t("programs.fitness.line5_3")}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className={styles.card_image}>
            <Image src={"/images/1.png"} alt="fitness" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessProgram;
