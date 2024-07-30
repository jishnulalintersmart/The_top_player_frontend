import styles from "@/styles/Coupon.module.scss";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { applyCoupon, resetCoupon } from "@/store/CouponSlice";
import { BiSolidOffer } from "react-icons/bi";

const Coupon = ({ courseAmount }) => {
  const [coupon, setCoupon] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();

  const toast = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const coupon_code = coupon;
    try {
      setError("");
      const result = await dispatch(
        applyCoupon({ coupon_code, courseAmount })
      ).unwrap();
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      setError(error);
      console.error("Failed to apply coupon:", error);
    }
  };

  const handleRemove = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);
    setCoupon("");
    dispatch(resetCoupon());
  };

  return (
    <>
      <form
        onSubmit={success ? handleRemove : handleSubmit}
        className={styles.couponWrap}
      >
        <div className={styles.inputWrap}>
          <input value={coupon} onChange={(e) => setCoupon(e.target.value)} />
          <button type="submit" name="subscribe">
            {success ? "Remove" : "Apply"}
          </button>
        </div>
      </form>
      {error && <small className={styles.error}>{error}</small>}
      {success && (
        <div className={styles.successWrap}>
          <BiSolidOffer style={{ color: "green", fontSize: "25px" }} />
          <span>Coupon applied</span>
        </div>
      )}
    </>
  );
};

export default Coupon;
