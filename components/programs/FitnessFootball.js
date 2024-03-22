import Image from "next/legacy/image";
import { useTranslation } from "react-i18next";
import { FaDumbbell } from "react-icons/fa";

const FitnessFottball = ({ styles, Lang }) => {
  const { t } = useTranslation();
  return (
   <div className={Lang === "ar" ? "progrss_ar" : "progrss_en"}>
     <div className="row align-items-center justify-content-between">
      <div className="col-md-8">
        <h1
          className="title"
          style={{
            lineHeight: Lang === "ar" ? "normal" : "",
          }}
        >
          {t("programs_details.fitness_fottboll.title")}
        </h1>
        {/* <p className={styles.program_p}>
        Grain access to Football & Fitness Program for 4 months
      </p> */}
        <p className={styles.program_p_2}>{t("programs_details.contain")}</p>

        <div
          className={`${styles.Program} ${
            Lang === "ar" ? styles.Ar_program : ""
          }`}
        >
          <ul>
            <li>
              <div className={styles.check}>
                <span className={styles.dumbel}>
                  <FaDumbbell />
                </span>
                <p>{t("programs_details.fitness_fottboll.line1")}</p>
              </div>
            </li>
            <li>
              <div className={styles.check}>
                <span className={styles.dumbel}>
                  <FaDumbbell />
                </span>
                <p>{t("programs_details.fitness_fottboll.line2")}</p>
              </div>
            </li>
            <li>
              <div className={styles.check}>
                <span className={styles.dumbel}>
                  <FaDumbbell />
                </span>
                <p>{t("programs_details.fitness_fottboll.line3")}</p>
              </div>
            </li>
            <li>
              <div className={styles.check}>
                <span className={styles.dumbel}>
                  <FaDumbbell />
                </span>
                <p>{t("programs_details.fitness_fottboll.line4")}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-4">
        <div className={styles.card_image}>
          <Image
            src={"/images/2.png"}
            alt="fitness"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
   </div>
  );
};

export default FitnessFottball;
