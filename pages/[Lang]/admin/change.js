import styles from "@/styles/Login.module.css";
// import Image from "next/legacy/image";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";
// import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import Link from "next/link";
import {  changePassword } from "@/store/AuthSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import LangWrap from "@/components/layouts/LangWarp";
const Change = ({ Lang }) => {
  const [disabel, setDisabed] = useState(false);
  // const [disabelResend, setDisabedResend] = useState(false);
  // console.log(Lang)
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      password: "",
      code: "",
      // confirm_password: "",
    },
    validate: (data) => {
      let errors = {};
      if (!data.password) {
        errors.password = t("auth.req_password");
      }
      if (!data.code) {
        errors.code = t("auth.req_code");
      }
      return errors;
    },
    onSubmit: (data) => {
      if (data) {
        setDisabed(true);
        const result = {
          newpassword: data.password,
          email: router.query.email,
          verification_code: data.code,
        };
        dispatch(changePassword(result))
          .unwrap()
          .then((res) => {
            show("Success");
            formik.resetForm();
            setDisabed(false);

            setTimeout(() => {
              router.push(`/${Lang}/admin/login`);
            }, 1000);
          })
          .catch((err) => {
            setDisabed(false);
            // console.log(err.response.data.message)
            if (err?.response?.data?.message) {
              EMptyInput(err.response.data.message);
            } else {
              EMptyInput(t("auth.wrong"));
            }
            // EMptyInput()
          });
      }
    },
  });

  const toast = useRef(null);
  const EMptyInput = (mess) => {
    toast.current.show({
      severity: "error",
      summary: `${mess}`,
      // life: 3000,
    });
  };
  const show = () => {
    toast.current.show({
      severity: "success",
      summary: t("auth.succ_login"),
      // detail: formik.values.value,
    });
  };
  const isFormFieldInvalid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name) => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{formik.errors[name]}</small>
    ) : "" ;
  };

  return (
    <LangWrap Lang={Lang}>
      <div
        className={styles.Login}
        style={{
          direction: Lang === "ar" ? "rtl" : "ltr",
        }}
      >
        <Toast ref={toast} />
        <div className={styles.Login_card}>
          <h1>{t("auth.change_pass")}</h1>

          <form onSubmit={formik.handleSubmit} className="grid  gap-2">
            <div className="col-12">
              <div className={`inputFormik ${Lang === "ar" ? "Ar_Sign" : ""}`}>
                <label htmlFor="password"> {t("auth.new_password")}</label>
                <Password
                  placeholder={"*************"}
                  toggleMask
                  name="password"
                  className={`${classNames({
                    "p-invalid": isFormFieldInvalid("password"),
                  })} w-full `}
                  value={formik.values.password}
                  feedback={false}
                  onChange={(e) => {
                    formik.setFieldValue("password", e.target.value);
                  }}
                />

                {getFormErrorMessage("password")}
              </div>
            </div>
            <div className="col-12">
              <div className="inputFormik">
                <label htmlFor="code">{t("auth.code")} </label>
                <InputText
                  placeholder="12345"
                  name="code"
                  className={classNames({
                    "p-invalid": isFormFieldInvalid("code"),
                  })}
                  value={formik.values.code}
                  onChange={(e) => {
                    formik.setFieldValue("code", e.target.value);
                  }}
                />
                {getFormErrorMessage("code")}
              </div>
            </div>
            <button
              name="login"
              type="submit"
              disabled={disabel}
              className={`submit-button ${disabel == true && "LoadingButton"}`}
            >
              {t("auth.send")}
            </button>

            <div className={styles.have_account}>
              <p
                style={{
                  marginRight: Lang === "ar" ? "0" : "10px",
                  marginLeft: Lang === "ar" ? "10px" : "0",
                }}
              >
                {t("auth.have_account")}
              </p>
              <Link href={`/${Lang}/admin/login`}>{t("auth.login")}</Link>
            </div>
          </form>
        </div>
      </div>
    </LangWrap>
  );
};

export default Change;
export async function getServerSideProps({ params }) {
  // Fetch data from external API or CMS using params.id

  return {
    props: {
      Lang: params.Lang.toLowerCase(),
    },
  };
}
