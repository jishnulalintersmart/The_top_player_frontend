import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";
// import { PiPencilSimpleLine } from "react-icons/pi";

const FAQs = ({ styles, Lang }) => {
  const { t } = useTranslation();

  return (
    <div className={`${styles.faq_section} margin_top `} id="faq">
      <div className="container ">
        <div className={styles.FAQs}>
          <h2
            className={`title ${styles.title}`}
            style={{
              lineHeight: Lang === "ar" ? "normal" :"38px",
            }}
          >
            {t("faqs.title")}
          </h2>

          <div
            className={`${styles.FaqAcc}  ${
              Lang === "ar" ? "AR_FaqAcc" : "EN_FaqAcc"
            }`}
          >
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className={`${styles.FAQ_info} FAQ_info_ar`}>
                    <h6>{t("faqs.faq1")}</h6>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <p className={styles.FAQ_P}>{t("faqs.ans1")}</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div className={`${styles.FAQ_info} FAQ_info_ar`}>
                    <h6>{t("faqs.faq2")}</h6>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <p className={styles.FAQ_P}>{t("faqs.ans2")}</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <div className={`${styles.FAQ_info} FAQ_info_ar`}>
                    <h6>{t("faqs.faq3")}</h6>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <p className={styles.FAQ_P}>
                    
                    {t("faqs.ans3_1")}
                    <span className="En_num">
                    {t("faqs.ans3_2")}

                    </span>
                    {t("faqs.ans3_3")}
                    
                    
                    </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <div className={`${styles.FAQ_info} FAQ_info_ar`}>
                    <h6>{t("faqs.faq4")}</h6>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <p className={styles.FAQ_P}>{t("faqs.ans4")}</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
