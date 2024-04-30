import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Col } from "react-bootstrap";
// import styles from "@/styles/Navbar.module.css";
import styles from "@/styles/Navbar.module.scss";
import { useRouter } from "next/router";
import { AiFillInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Sidebar } from "primereact/sidebar";
import { FaTiktok } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import Image from "next/legacy/image";
import Cookies from "js-cookie";
import { ClearToken } from "@/store/CourcesSlice";
import { useDispatch, useSelector } from "react-redux";
import { ClearSecret, getUserInfo } from "@/store/AuthSlice";
import { useTranslation } from "react-i18next";
import LangWrap from "./LangWarp";

const Navbar = ({ overHeight, state }) => {
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { subscribedCourseArr } = useSelector((state) => state.CourcesSlice);
  const { user_info } = useSelector((state) => state.AuthSlice);

  console.log(user_info);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  useEffect(() => {
    if (router?.query?.Lang?.toLowerCase() === "ar") {
      i18n.changeLanguage("ar");
    } else {
      i18n.changeLanguage("en");
    }
  }, [i18n, router.query.Lang]);
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  return (
    <LangWrap
      Lang={
        router?.query?.Lang?.toLowerCase()
          ? router?.query?.Lang?.toLowerCase()
          : "en"
      }
    >
      <div
        className={`${styles.navbar} ${
          router.pathname.includes("/admin/login") ||
          router.pathname.includes("/admin/signup") ||
          router.pathname.includes("/admin/forget") ||
          router.pathname.includes("/terms") ||
          router.pathname.includes("/admin/change") ||
          router.pathname.includes("/admin/change") ||
          router.pathname.includes("/update-password") ||
          router.pathname.includes("/user/programs") ||
          router.pathname.includes("/user/profile") ||
          router.pathname.includes("/user/profile") ||
          router.pathname.includes("/user/payment/") ||
          router.pathname.includes("/user/payment-program")
            ? "spHeader is-sticky"
            : "commonHeader"
        } header`}
      >
        <Sidebar
          position={
            router?.query?.Lang?.toLowerCase() === "ar" ? "right" : "left"
          }
          visible={visible}
          onHide={() => setVisible(false)}
          showCloseIcon={false}
          className={styles.sidebarWrap}
        >
          <div
            className={styles.side_menu}
            style={{
              direction:
                router?.query?.Lang?.toLowerCase() === "ar" ? "rtl" : "ltr",
            }}
          >
            <div
              className={`${styles.Links_side}  ${
                router?.query?.Lang?.toLowerCase() === "en"
                  ? styles.ar_lang
                  : styles.en_lang
              }`}
            >
              <button
                className={styles.close_side}
                onClick={() => setVisible(false)}
              >
                <IoClose />
              </button>
              <Link
                onClick={() => setVisible(false)}
                href={`/${router?.query?.Lang?.toLowerCase()}`}
                className={`${
                  router.asPath === router.query.Lang
                    ? styles.active
                    : styles.link
                }`}
              >
                {t("menu.home")}
              </Link>
              <Link
                onClick={() => setVisible(false)}
                href={`/${router?.query?.Lang?.toLowerCase()}#about`}
                className={
                  router.asPath.includes(
                    `/${router?.query?.Lang?.toLowerCase()}#about`
                  )
                    ? styles.active
                    : styles.link
                }
              >
                {t("menu.about")}
              </Link>
              <Link
                onClick={() => setVisible(false)}
                href={`/${router?.query?.Lang?.toLowerCase()}#programs`}
                className={
                  router.asPath.includes(
                    `/${router?.query?.Lang?.toLowerCase()}#programs`
                  )
                    ? styles.active
                    : styles.link
                }
              >
                {t("menu.our_programs")}
              </Link>

              <Link
                onClick={() => setVisible(false)}
                href={`/${router?.query?.Lang?.toLowerCase()}#faq`}
                className={
                  router.asPath.includes(
                    `/${router?.query?.Lang?.toLowerCase()}#faq`
                  )
                    ? styles.active
                    : styles.link
                }
              >
                {t("menu.faq")}
              </Link>
              <Link
                onClick={() => setVisible(false)}
                href={`/${router?.query?.Lang?.toLowerCase()}#contact`}
                className={
                  router.asPath.includes(
                    `/${router?.query?.Lang?.toLowerCase()}#contact`
                  )
                    ? styles.active
                    : styles.link
                }
              >
                {t("menu.contact")}
              </Link>
              <hr />
              {Cookies.get("UT") &&
                subscribedCourseArr &&
                subscribedCourseArr.length > 0 && (
                  <Link
                    href={`/${router?.query?.Lang?.toLowerCase()}/user/payment-program`}
                    onClick={() => setVisible(false)}
                    className={
                      router.asPath.includes(
                        `/${router?.query?.Lang?.toLowerCase()}/user/payment-program`
                      )
                        ? styles.active
                        : styles.link
                    }
                  >
                    {t("menu.payments")}
                  </Link>
                )}
              {Cookies.get("UT") && (
                <Link
                  href={`/${router?.query?.Lang?.toLowerCase()}/user/profile`}
                  onClick={() => setVisible(false)}
                  className={
                    router.asPath.includes(
                      `/${router?.query?.Lang?.toLowerCase()}/user/profile`
                    )
                      ? styles.active
                      : styles.link
                  }
                >
                  {t("menu.edit_profile")}
                </Link>
              )}
              {Cookies.get("UT") && (
                <Link
                  href={`/${router?.query?.Lang?.toLowerCase()}/user/update-password`}
                  onClick={() => setVisible(false)}
                  className={
                    router.asPath.includes(
                      `/${router?.query?.Lang?.toLowerCase()}/user/update-password`
                    )
                      ? styles.active
                      : styles.link
                  }
                >
                  {t("menu.update_pass")}
                </Link>
              )}
              {Cookies.get("UT") && (
                <Link
                  onClick={() => setVisible(false)}
                  href={`/${router?.query?.Lang?.toLowerCase()}/user/programs`}
                  className={
                    router.asPath.includes(
                      `/${router?.query?.Lang?.toLowerCase()}/user/programs`
                    )
                      ? styles.active
                      : styles.link
                  }
                >
                  {t("menu.my_programs")}
                </Link>
              )}
              {Cookies.get("UT") && <hr />}
              {!Cookies.get("UT") && (
                <Link
                  href={`/${router?.query?.Lang?.toLowerCase()}/admin/login`}
                  className={`${styles.sign_side}  ${
                    router?.query?.Lang?.toLowerCase() === "en"
                      ? styles.ar_lang
                      : styles.en_lang
                  }`}
                  onClick={() => setVisible(false)}
                >
                  <IoPersonCircleOutline
                    style={{
                      marginRight:
                        router?.query?.Lang?.toLowerCase() === "ar"
                          ? "0"
                          : "10px",
                      marginLeft:
                        router?.query?.Lang?.toLowerCase() === "ar"
                          ? "10px"
                          : "0",
                    }}
                  />
                  {t("menu.login")}
                </Link>
              )}

              {!Cookies.get("UT") && (
                <Link
                  href={`/${router?.query?.Lang?.toLowerCase()}/admin/signup`}
                  className={`${styles.sign_side}  ${
                    router?.query?.Lang?.toLowerCase() === "en"
                      ? styles.ar_lang
                      : styles.en_lang
                  }`}
                  onClick={() => setVisible(false)}
                >
                  <IoPersonCircleOutline
                    style={{
                      marginRight:
                        router?.query?.Lang?.toLowerCase() === "ar"
                          ? "0"
                          : "10px",
                      marginLeft:
                        router?.query?.Lang?.toLowerCase() === "ar"
                          ? "10px"
                          : "0",
                    }}
                  />
                  {t("menu.signup")}
                </Link>
              )}
            </div>
            {Cookies.get("UT") && (
              <Link
                href={`/${router?.query?.Lang?.toLowerCase()}`}
                className={`${styles.out_side}  ${
                  router?.query?.Lang?.toLowerCase() === "en"
                    ? styles.ar_lang
                    : styles.en_lang
                }`}
                onClick={() => {
                  setVisible(false);
                  Cookies.remove("UT");
                  dispatch(ClearToken());
                  dispatch(ClearSecret());
                }}
              >
                <CiLogout
                  style={{
                    marginRight:
                      router?.query?.Lang?.toLowerCase() === "ar"
                        ? "0"
                        : "10px",
                    marginLeft:
                      router?.query?.Lang?.toLowerCase() === "ar"
                        ? "10px"
                        : "0",
                  }}
                />
                {t("menu.logout")}
              </Link>
            )}
          </div>
        </Sidebar>
        <div
          className="container"
          style={{
            direction:
              router?.query?.Lang?.toLowerCase() === "ar" ? "rtl" : "ltr",
          }}
        >
          <div className={styles.mainNav}>
            <div className={styles.lftSd}>
              <div className={styles.lftItemWrap}>
                <div className={styles.item}>
                  <button
                    style={{
                      padding: 0,
                      display: "flex",
                    }}
                    className={`${styles.menu_button} menu_btn`}
                    aria-label="menu"
                    name="menu"
                    onClick={() => {
                      setVisible(true);
                    }}
                  >
                    <RxHamburgerMenu />
                  </button>
                </div>
                <div className={styles.item}>
                  <button
                    className={`${styles.menu_button} ${styles.image_lang} ${
                      router?.query?.Lang?.toLowerCase() === "ar"
                        ? styles.ar_lang
                        : styles.en_lang
                    } lang_btn`}
                    aria-label="menu"
                    name="menu"
                    onClick={() => {
                      setVisible(false);

                      if (router?.query?.Lang?.toLowerCase() === "ar") {
                        i18n.changeLanguage("en");
                        router.push(`/en`);
                      } else {
                        i18n.changeLanguage("ar");
                        router.push(`/ar`);
                      }
                    }}
                  >
                    {t("menu.lang")}
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.midSd}>
              <div
                className={styles.logo_wrap}
                onClick={() => {
                  router.push(`/${router?.query?.Lang?.toLowerCase()}`);
                  overHeight(false);
                  setShow(false);
                  setToggle(false);
                }}
              >
                <span className="logoLight">
                  <Image
                    src={"/images/logo-light.svg"}
                    layout={"fill"}
                    objectFit={"contain"}
                    alt={"logo"}
                    priority
                  />
                </span>
                <span className="logoDark">
                  <Image
                    src={"/images/logo.svg"}
                    layout={"fill"}
                    objectFit={"contain"}
                    alt={"logo"}
                    priority
                  />
                </span>
              </div>
            </div>

            <div className={styles.rgtSd}>
              <div className={styles.rgtItemWrap}>
                <div className={styles.item}>
                  {!Cookies.get("UT") && (
                    <Link
                      href={
                        router.pathname.includes("/admin/login")
                          ? `/${router?.query?.Lang?.toLowerCase()}/admin/signup`
                          : `/${router?.query?.Lang?.toLowerCase()}/admin/login`
                      }
                      onClick={() => {
                        setToggle(false);
                      }}
                      className={`${styles.navBtn} hoveranim`}
                    >
                      {router.pathname.includes("/admin/login") ? (
                        <span>{t("menu.signup")}</span>
                      ) : (
                        <span>{t("menu.login")}</span>
                      )}
                    </Link>
                  )}
                </div>
                <div className={styles.item}>
                  <div className={`${styles.userWrap} userWrap`}>
                    <span className="name">
                      {user_info && user_info?.username}
                    </span>
                    {Cookies.get("UT") && (
                      <button
                        className={styles.toogle_menu}
                        onClick={() => setToggle(!toggle)}
                      >
                        <IoPersonCircleOutline />
                        <Image
                          src={"/images/icon-user.svg"}
                          layout={"fill"}
                          objectFit={"contain"}
                          alt={"user"}
                        />
                      </button>
                    )}

                    {toggle && (
                      <div
                        className={styles.drop_men}
                        style={{
                          right:
                            router?.query?.Lang?.toLowerCase() === "ar"
                              ? "unset"
                              : "0",
                          left:
                            router?.query?.Lang?.toLowerCase() === "ar"
                              ? "0"
                              : "unset",
                        }}
                      >
                        {!Cookies.get("UT") && (
                          <Link
                            href={`/${router?.query?.Lang?.toLowerCase()}/admin/login`}
                            onClick={() => setToggle(false)}
                          >
                            {t("menu.login")}
                          </Link>
                        )}
                        {!Cookies.get("UT") && <hr />}
                        {!Cookies.get("UT") && (
                          <Link
                            href={`/${router?.query?.Lang?.toLowerCase()}/admin/signup`}
                            onClick={() => setToggle(false)}
                          >
                            {t("menu.signup")}
                          </Link>
                        )}

                        {Cookies.get("UT") && (
                          <Link
                            href={`/${router?.query?.Lang?.toLowerCase()}/user/programs`}
                            onClick={() => setToggle(false)}
                          >
                            {t("menu.my_programs")}
                          </Link>
                        )}
                        {Cookies.get("UT") &&
                          subscribedCourseArr &&
                          subscribedCourseArr.length > 0 && <hr />}
                        {Cookies.get("UT") &&
                          subscribedCourseArr &&
                          subscribedCourseArr.length > 0 && (
                            <Link
                              href={`/${router?.query?.Lang?.toLowerCase()}/user/payment-program`}
                              onClick={() => setToggle(false)}
                            >
                              {t("menu.payments")}
                            </Link>
                          )}
                        {Cookies.get("UT") && <hr />}
                        {Cookies.get("UT") && (
                          <Link
                            href={`/${router?.query?.Lang?.toLowerCase()}/user/profile`}
                            onClick={() => setToggle(false)}
                          >
                            {t("menu.edit_profile")}
                          </Link>
                        )}
                        {Cookies.get("UT") && <hr />}
                        {Cookies.get("UT") && (
                          <Link
                            href={`/${router?.query?.Lang?.toLowerCase()}/user/update-password`}
                            onClick={() => setToggle(false)}
                          >
                            {t("menu.update_pass")}
                          </Link>
                        )}
                        {Cookies.get("UT") && <hr />}
                        {Cookies.get("UT") && (
                          <Link
                            href={`/${router?.query?.Lang?.toLowerCase()}`}
                            onClick={() => {
                              setToggle(false);
                              Cookies.remove("UT");
                              dispatch(ClearToken());
                              dispatch(ClearSecret());
                            }}
                          >
                            {t("menu.logout")}
                          </Link>
                        )}
                      </div>
                    )}
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

export default Navbar;
