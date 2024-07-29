import CheckoutForm from "@/components/Payment/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import styles from "@/styles/Profile.module.scss";
import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const stripePromise = loadStripe(
  "pk_live_51O7Z2SBIK7a01kKz9y6brLLX1SQBrs7OMn4RFfb6GRQuE8Hv7SMSURDJLuJazosoWyLPJv8i4xrVNjwhP89nuDOb00ZDiIGV5U"
);
// const stripePromise = loadStripe(
//   "pk_test_51O7Z2SBIK7a01kKzeBhiuYUF4wDVbSRIQSaaNoXDH6EesdBEDX4q68oABlFwYwmVheThQKBGENfalCW39yNhHh6f00Ge8Zrzhq"
// );
import { useDispatch, useSelector } from "react-redux";
import { PayReducer } from "@/store/AuthSlice";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import LangWrap from "@/components/layouts/LangWarp";
import axios from "axios";
import TamaraWidget from "@/components/Payment/Tamara/widget";
import { Button } from "react-bootstrap";
import { courseById } from "@/store/CourcesSlice";
import Coupon from "@/components/layouts/Coupon";

const Payment = ({ course_id, Lang, CourseByIdArray }) => {
  // console.log("CourseByIdArray", CourseByIdArray);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const router = useRouter();
  const { clientSecret } = useSelector((state) => state.AuthSlice);
  const { currentcurrency } = useSelector((state) => state.CurrencySlice);
  const { coupon } = useSelector((state) => state.CouponSlice);

  console.log(coupon);

  const [isLoading, setIsLoading] = useState(false);

  const tamaraSupportCurrencies = ["AE"];

  useEffect(() => {
    if (course_id && currentcurrency) {
      dispatch(PayReducer({ course_id, currentcurrency }))
        .unwrap()
        .then(() => {})
        .catch((err) => {
          if (err?.response?.status === 401) {
            Cookies.remove("UT");
            router.push(`/${Lang}`);
          }
        });
    }
  }, [dispatch, course_id, router, Lang, currentcurrency]);

  const options = {
    clientSecret: clientSecret,
  };

  const initiateTamaraPayment = () => {
    setIsLoading(true);
    console.log("tamara initiated", Cookies.get("UT"));
    axios
      .post(
        `${process.env.customKey}/create-tamara-payment`,
        {
          courseId: course_id,
          lang: Lang,
          type: "programs",
          amount: CourseByIdArray?.offerAmount,
        },
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
                        <p className="En_num">
                          {currentcurrency?.currency_code}{" "}
                          {Math.ceil(
                            (
                              CourseByIdArray?.offerAmount *
                              currentcurrency?.currency_rate
                            ).toFixed(2)
                          )}
                        </p>
                      </div>

                      <div>
                        <Coupon courseAmount={CourseByIdArray?.offerAmount} />
                      </div>
                      <div
                        className={`${styles.package} ${styles.package_sub}`}
                      >
                        <p>{t("payment.Subtotal")}</p>
                        <p className="En_num"><s className="text-muted">
                          {currentcurrency?.currency_code}{" "}
                          {Math.ceil(
                            (
                              CourseByIdArray?.amount *
                              currentcurrency?.currency_rate
                            ).toFixed(2)
                          )}
                        </s>
                        </p>
                      </div>
                      <div
                        className={`${styles.package} ${styles.package_sub}`}
                      >
                        {coupon ? (
                          <>
                            <p>{t("payment.Discount")}</p>
                            <p className="En_num">
                              {Math.ceil(
                                coupon.discountAmount *
                                  currentcurrency.currency_rate
                              )}
                            </p>
                          </>
                        ) : (
                          <>
                            <p>{t("payment.Discount")}</p>
                            <p className="En_num">0</p>
                          </>
                        )}
                      </div>
                      <hr />
                      <div
                        className={`${styles.package} ${styles.package_total}`}
                      >
                        {coupon ? (
                          <>
                            <p>{t("payment.Total")}</p>
                            <p className="En_num">
                              {currentcurrency?.currency_code}{" "}
                              {Math.ceil(
                                coupon?.discountAmount *
                                  currentcurrency?.currency_rate
                              )}
                            </p>
                          </>
                        ) : (
                          <>
                            <p>{t("payment.Total")}</p>
                            <p className="En_num">
                              {currentcurrency?.currency_code}{" "}
                              {Math.ceil(
                                (
                                  CourseByIdArray?.offerAmount *
                                  currentcurrency?.currency_rate
                                ).toFixed(2)
                              )}
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 text-center">
                  {stripePromise && clientSecret && (
                    <Elements
                      stripe={stripePromise}
                      options={options}
                      allow="payment"
                    >
                      <CheckoutForm course_id={course_id} Lang={Lang} />
                    </Elements>
                  )}
                  {tamaraSupportCurrencies.includes(
                    currentcurrency?.currency_flag
                  ) ? (
                    <div className="tamara-widget">
                      <div className="tamara-wrapper">
                        <TamaraWidget Lang={Lang} />
                      </div>
                      <Button
                        variant="success"
                        onClick={initiateTamaraPayment}
                        disabled={isLoading}
                      >
                        Pay With Tamara
                      </Button>
                    </div>
                  ) : (
                    <p>{t("payment.payment_not_supported")}</p>
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
      .get(
        `${process.env.customKey}/courseById/${parseInt(params.course_id)}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-Access-Token": req.cookies.UT,
          },
        }
      )
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
