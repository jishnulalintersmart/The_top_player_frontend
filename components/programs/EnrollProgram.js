import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "@/styles/Program.module.scss";
import Link from "next/link";
import Cookies from "js-cookie";

const EnrollProgram = ({ Lang, programId, CoursecArr, CourseByIdArray }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.enrollProgram_section}>
      <div className={"container"}>
        <div className={styles.enrollProgramBx}>
          <div className={styles.lftWrap}>
            <div className={`${styles.tleWrap} tleWrap`}>
              <div className={styles.dElmt}></div>
              <div className={"mTle"}>{t("enroll_to_our_program")}</div>
              <div className={styles.txt}>
                {Lang === "ar" ? CourseByIdArray?.enroll_text_ar : CourseByIdArray?.enroll_text}
              </div>
            </div>
          </div>
          <div className={styles.rgtWrap}>
            <div className={styles.btnWrap}>
              {!CoursecArr ? (
                <Link
                  href={Cookies.get("UT") ? `/${Lang}/user/payment/${programId}` : `/${Lang}/admin/login`}
                  className={"baseBtn hoveranim"}
                  aria-label="view all button"
                >
                  <span>{t("join_now")}</span>
                </Link>
              ) : (
                <Link href={"#!"} className={"baseBtn hoveranim"} aria-label="view all button">
                  <span>YALLA !</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollProgram;
