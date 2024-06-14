import CheckoutForm from "@/components/Payment/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import styles from "@/styles/Profile.module.scss";
import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const stripePromise = loadStripe(
  "pk_test_51O7Z2SBIK7a01kKzeBhiuYUF4wDVbSRIQSaaNoXDH6EesdBEDX4q68oABlFwYwmVheThQKBGENfalCW39yNhHh6f00Ge8Zrzhq"
);
// const stripePromise = loadStripe(
//   "pk_live_51O7Z2SBIK7a01kKz9y6brLLX1SQBrs7OMn4RFfb6GRQuE8Hv7SMSURDJLuJazosoWyLPJv8i4xrVNjwhP89nuDOb00ZDiIGV5U"
// );
import { useDispatch, useSelector } from "react-redux";
import { PayReducer } from "@/store/AuthSlice";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import LangWrap from "@/components/layouts/LangWarp";
import axios from "axios";
import { Button } from "react-bootstrap";
import TamaraWidget from "@/components/Payment/Tamara/widget";

const Payment = ({ course_id, Lang, CourseByIdArray }) => {
  // console.log("CourseByIdArray", CourseByIdArray);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const router = useRouter();
  const { clientSecret } = useSelector((state) => state.AuthSlice);
  const [isLoading, setIsLoading] = useState(false);
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

  const options = {
    clientSecret: clientSecret,
  };

  const initiateTamaraPayment = () => {
    setIsLoading(true);
    console.log("tamara initiated", Cookies.get("UT"));
    axios
      .post(
        `${process.env.customKey}/create-tamara-payment`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-Access-Token": Cookies.get("UT"),
          },
        }
      )
      .then((res) => {
        console.log("res===>", res.data);
        setIsLoading(false);
        if (res?.data?.data?.checkoutUrl) {
          window.location.href = res?.data?.data?.checkoutUrl;
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
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
                                src={`${process.env.customKey}/courseImages/${CourseByIdArray?.imageUrl}`}
                                alt="package"
                                layout="fill"
                                objectFit="contain"
                                loading="lazy"
                              />
                            </div>
                            <h4>{CourseByIdArray?.name}</h4>
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
                    <Elements stripe={stripePromise} options={options} allow="payment">
                      <CheckoutForm course_id={course_id} Lang={Lang} />
                    </Elements>
                  )}
                  {/* <tamara-widget type="tamara-summary" inline-type="2" amount="400"></tamara-widget> */}
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      padding: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ width: "100% !important" }}>
                      <TamaraWidget Lang={Lang} />
                    </div>
                    <Button
                      variant="success"
                      onClick={initiateTamaraPayment}
                      disabled={isLoading}
                      style={{ width: "50% !important", margin: "0", padding: "20px" }}
                    >
                      Pay With EMI
                    </Button>
                  </div>
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
