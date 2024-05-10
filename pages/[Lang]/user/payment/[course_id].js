import CheckoutForm from "@/components/Payment/CheckoutForm";
import { Elements, PaymentRequestButtonElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import styles from "@/styles/Profile.module.scss";
import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
// const stripePromise = loadStripe(
//   "pk_live_51O7Z2SBIK7a01kKz9y6brLLX1SQBrs7OMn4RFfb6GRQuE8Hv7SMSURDJLuJazosoWyLPJv8i4xrVNjwhP89nuDOb00ZDiIGV5U"
// );
const stripePromise = loadStripe(
  "pk_live_51O7Z2SBIK7a01kKz9y6brLLX1SQBrs7OMn4RFfb6GRQuE8Hv7SMSURDJLuJazosoWyLPJv8i4xrVNjwhP89nuDOb00ZDiIGV5U"
);
import { useDispatch, useSelector } from "react-redux";
import { PayReducer } from "@/store/AuthSlice";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import LangWrap from "@/components/layouts/LangWarp";
import axios from "axios";

const Payment = ({ course_id, Lang, CourseByIdArray }) => {
  console.log("CourseByIdArray", CourseByIdArray);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const router = useRouter();
  const { clientSecret } = useSelector((state) => state.AuthSlice);
  useEffect(() => {
    dispatch(PayReducer(course_id))
      .unwrap()
      .then(() => {})
      .catch((err) => {
        if (err?.response?.status === 401) {
          Cookies.remove("UT");
          router.push(`/${Lang}`);
        }
      });
  }, [dispatch, course_id, router, Lang]);
  // console.log(clientSecret);
  const options = {
    clientSecret: clientSecret,
  };

  const [show, setShow] = useState(false);
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
                  <div className={styles.Order_summery}>
                    {/* {parseInt(course_id) === 1 && ( */}
                    <div className={styles.summer_header} onClick={() => setShow(!show)}>
                      <h1>
                        {t("payment.summary")}
                        <span>
                          <MdArrowDropDown />
                        </span>
                      </h1>
                      <h3 className="En_num">${CourseByIdArray?.offerAmount}</h3>
                    </div>
                    {/* )} */}

                    {show && (
                      <div className={styles.summer_content}>
                        <div className={styles.package}>
                          <div className="d-flex align-items-center">
                            <div
                              className={styles.package_image}
                              style={{
                                marginRight: Lang === "ar" ? "0" : "10px",
                                marginLeft: Lang === "ar" ? "10px" : "0",
                              }}
                            >
                              <Image
                                src={"/images/1.png"}
                                alt="package"
                                layout="fill"
                                objectFit="contain"
                                loading="lazy"
                              />
                            </div>
                            <h4>{t("payment.fitness")}</h4>
                          </div>
                          <p className="En_num">${CourseByIdArray?.offerAmount}</p>
                        </div>
                        <div className={`${styles.package} ${styles.package_sub}`}>
                          <p>{t("payment.Subtotal")}</p>
                          <p className="En_num">${CourseByIdArray?.amount}</p>
                        </div>
                        <div className={`${styles.package} ${styles.package_sub}`}>
                          <p>{t("payment.Discount")}</p>
                          <p className="En_num">-{CourseByIdArray?.offerPercentage}%</p>
                        </div>
                        <hr />
                        <div className={`${styles.package} ${styles.package_total}`}>
                          <p>{t("payment.Total")}</p>
                          <p className="En_num">${CourseByIdArray?.offerAmount}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  {stripePromise && clientSecret && (
                    <Elements stripe={stripePromise} options={options}>
                      <PaymentRequestButtonElement />
                      <CheckoutForm course_id={course_id} Lang={Lang} />
                    </Elements>
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

export default Payment;

export async function getServerSideProps({ req, params }) {
  try {
    const result2 = await axios
      .get(`${process.env.customKey}/courseById/${parseInt(params.course_id)}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Access-Token": req.cookies.UT,
        },
      })
      .then((res) => res.data.course)
      .catch((err) => {
        console.log(err);
        return null;
      });
    return {
      props: {
        course_id: params.course_id,
        Lang: params.Lang.toLowerCase(),
        CourseByIdArray: result2,
      },
    };
  } catch (err) {
    return {
      props: {
        course_id: params.course_id,
        Lang: params.Lang.toLowerCase(),
        CourseByIdArray: null,
      },
    };
  }
}
