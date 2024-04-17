import Image from "next/legacy/image";
import { useRouter } from "next/router";
// import { useEffect } from "react";
// import { useEffect } from "react";
import { useTranslation } from "react-i18next";
// import { useSelector } from "react-redux";
export default function Custom500() {
  const { t } = useTranslation();
  // const { navHeight } = useSelector((state) => state.HomeSlice);
  //   const router = useRouter("/en");
  //   useEffect(() => {
  //       router.push()
  //   },[router])
  return (
    <div
      className="container padding_all container_confirm"

    >
      <div className="failer_card">
        <div className={"icon"}>
          <i className="checkmark">x</i>
        </div>
        <h1 className="title">{t("confirm.failure")}</h1>
        <p>{t("confirm.try")}</p>
      </div>
    </div>
  );
}
