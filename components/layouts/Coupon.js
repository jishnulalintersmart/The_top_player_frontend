import styles from "@/styles/Coupon.module.scss";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { applyCoupon } from "@/store/CouponSlice";

const Coupon = ({ courseAmount }) => {
  const [coupon, setCoupon] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();

  const toast = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const coupon_code = coupon;
    try {
      const result = await dispatch(
        applyCoupon({ coupon_code, courseAmount })
      ).unwrap();
    } catch (error) {
      setError(error);
      console.error("Failed to apply coupon:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.couponWrap}>
        <div className={styles.inputWrap}>
          <input value={coupon} onChange={(e) => setCoupon(e.target.value)} />
          <button type="submit" name="subscribe" disabled={disabled}>
            Apply
          </button>
        </div>
        {error && <small className={styles.error}>{error}</small>}
      </form>
    </>
  );
};

export default Coupon;
