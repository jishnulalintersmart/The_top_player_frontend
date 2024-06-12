// components/TamaraWidget.js

import LangWrap from "@/components/layouts/LangWarp";
import TamaraWidget from "@/components/Payment/Tamara/widget";
import { useEffect } from "react";
import styles from "@/styles/Profile.module.scss";


const Tamara = ({ Lang }) => {
  return (
    <LangWrap Lang={Lang}>
      <div className={"inner_section_outer"}>
        <div className={styles.payment_section}>
          <div
            className="container"
            style={{
              direction: Lang === "ar" ? "rtl" : "ltr",
            }}
          >
            <div className={`${styles.profile} ${styles.payment}`}>
              <div className="row">
                <div className="col-12">
                  <TamaraWidget Lang={Lang}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LangWrap>
  );
};

export default Tamara;

export async function getServerSideProps({ params }) {
  return {
    props: {
      Lang: params.Lang.toLowerCase(),
    },
  };
}
