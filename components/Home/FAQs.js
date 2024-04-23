import { getAllFaq } from "@/store/FaqSlice";
import { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
// import { PiPencilSimpleLine } from "react-icons/pi";

const FAQs = ({ styles, Lang }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { faqs } = useSelector((state) => state?.FaqSlice?.faqs);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getAllFaq()).unwrap();
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className={`${styles.Program_Section} margin_top `} id="faq">
      <div className="container ">
        <div className={styles.FAQs}>
          <h2
            className={`title ${styles.title}`}
            style={{
              lineHeight: Lang === "ar" ? "normal" : "38px",
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
              {faqs?.map((item, i) => (
                <Accordion.Item eventKey={i} key={item?.id}>
                  <Accordion.Header>
                    <div className={`${styles.FAQ_info} FAQ_info_ar`}>
                      <h2>
                        {Lang === "en" ? item?.question_en : item?.question_ar}
                      </h2>
                      {/* <h2>{t("faqs.faq1")}</h2> */}
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className={styles.FAQ_P}>
                      {Lang === "en" ? item?.answer_en : item?.answer_ar}
                    </p>
                    {/* <p className={styles.FAQ_P}>{t("faqs.ans1")}</p> */}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
              {/* <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div className={`${styles.FAQ_info} FAQ_info_ar`}>
                    <h2>{t("faqs.faq2")}</h2>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <p className={styles.FAQ_P}>{t("faqs.ans2")}</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <div className={`${styles.FAQ_info} FAQ_info_ar`}>
                    <h2>{t("faqs.faq3")}</h2>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <p className={styles.FAQ_P}>
                    {t("faqs.ans3_1")}
                    <span className="En_num">{t("faqs.ans3_2")}</span>
                    {t("faqs.ans3_3")}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <div className={`${styles.FAQ_info} FAQ_info_ar`}>
                    <h2>{t("faqs.faq4")}</h2>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <p className={styles.FAQ_P}>{t("faqs.ans4")}</p>
                </Accordion.Body>
              </Accordion.Item> */}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
