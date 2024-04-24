import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "@/styles/Program.module.scss";
import Link from "next/link";

const EnrollProgram = ({ Lang }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.enrollProgram_section}>
      <div className={"container"}>
        <div className={styles.enrollProgramBx}>
          <div className={styles.lftWrap}>
            <div className={`${styles.tleWrap} tleWrap`}>
              <div className={styles.dElmt}></div>
              <div className={"mTle"}>Enroll to our program</div>
              <div className={styles.txt}>
                There are many variations of passages of Lorem Ipsum available.
              </div>
            </div>
          </div>
          <div className={styles.rgtWrap}>
            <div className={styles.btnWrap}>
              <Link
                href={"#!"}
                className={"baseBtn hoveranim"}
                aria-label="view all button"
              >
                <span>JOIN NOW</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollProgram;
