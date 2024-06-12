// components/TamaraWidget.js
"useClient";

import LangWrap from "@/components/layouts/LangWarp";
import TamaraWidget from "@/components/Payment/Tamara/widget";
import { useEffect, useState } from "react";
import styles from "@/styles/Profile.module.scss";
import axios from "axios";

const Tamara = ({ Lang }) => {
  const [eligible, setEligibile] = useState({});
  const checkEligibility = () => {
    axios
      .post(
        "https://api-sandbox.tamara.co/checkout/payment-options-pre-check",
        {
          country: "AE",
          order_value: {
            amount: "1.00",
            currency: "AED",
          },
          phone_number: "971502813981",
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.tamaraPrivateKey}`, // Assuming the API key is stored in the config
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("res==>", res.data);
        setEligibile(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
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
                  <TamaraWidget Lang={Lang} />

                  <button
                    onClick={checkEligibility}
                    style={{
                      width: "fit-content !important",
                      border: "1px solid rgba(0,0,0,0.2)",
                      borderRadius: "10px",
                      padding: "5px 10px",
                    }}
                  >
                    check eligibility
                  </button>
                  {eligible?.has_available_payment_options && (
                    <div>
                      <ul
                        style={{
                          listStyle: "none",
                          border: "1px solid rgba(0,0,0,0.1)",
                          margin: "15px 10px",
                          padding: "10px",
                        }}
                      >
                        <li>Payment Type: {eligible?.available_payment_labels[0]?.payment_type}</li>
                        <li>Installment: {eligible?.available_payment_labels[0]?.instalment}</li>
                        <li>description en: {eligible?.available_payment_labels[0]?.description_en}</li>
                        <li>description ar: {eligible?.available_payment_labels[0]?.description_ar}</li>
                      </ul>
                    </div>
                  )}
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
