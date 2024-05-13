import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "@/styles/Program.module.scss";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const EnrollProgram = ({
  Lang,
  programId,
  CoursecArr,
  CourseByIdArray,
  expired,
}) => {
  const { t } = useTranslation();

  const router = useRouter();

  const handleRedirect = () => {
    if (Cookies.get("UT")) {
      router.push(`/${Lang}/user/payment/${programId}`);
    } else {
      sessionStorage.setItem("courseId", programId);
      router.push(`/${Lang}/admin/login`);
    }
  };

  return (
    <div className={styles.enrollProgram_section}>
      <div className={"container"}>
        <div className={styles.enrollProgramBx}>
          <div className={styles.lftWrap}>
            <div className={`${styles.tleWrap} tleWrap`}>
              <div className={styles.dElmt}></div>
              <div className={"mTle"}>
                {t(expired ? "renew_program" : "enroll_to_our_program")}
              </div>
              <div className={styles.txt}>
                {Lang === "ar"
                  ? CourseByIdArray?.enroll_text_ar
                  : CourseByIdArray?.enroll_text}
              </div>
            </div>
          </div>
          <div className={styles.rgtWrap}>
            <div className={styles.btnWrap}>
              {!CoursecArr ? (
                <button
                  onClick={handleRedirect}
                  className={"baseBtn hoveranim"}
                  aria-label="view all button"
                >
                  <span>{t("join_now")}</span>
                </button>
              ) : expired ? (
                <button
                  onClick={handleRedirect}
                  className={"baseBtn hoveranim"}
                  aria-label="view all button"
                >
                  <span>Renew !</span>
                </button>
              ) : (
                <button
                  href={"#!"}
                  className={"baseBtn hoveranim"}
                  aria-label="view all button"
                >
                  <span>YALLA !</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollProgram;
