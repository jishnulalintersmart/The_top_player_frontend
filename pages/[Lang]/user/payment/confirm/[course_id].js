// import { ConfirmPayCourse } from "@/store/AuthSlice";
import LangWrap from "@/components/layouts/LangWarp";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
// import { useDispatch } from "react-redux";

const Cnofirm = ({ course_id, Lang }) => {
  const router = useRouter();
  // const dispatch = useDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push(`/${Lang}/user/programs/details/${course_id}`);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [Lang, course_id, router]);

  return (
   <LangWrap Lang={Lang}>
     <div
      className="container padding_all container_confirm"
      style={{
        direction: Lang === "ar" ? "rtl" : "ltr",
      }}
    >
      <div className="confrim_card">
        <div className={"icon"}>
          <i className="checkmark">✓</i>
        </div>
        <h1 className="title">{t("confirm.success")}</h1>
        <p>{t("confirm.pruch")}</p>
      </div>
    </div>
   </LangWrap>
  );
};

export default Cnofirm;
export async function getServerSideProps({ params }) {
  return {
    props: {
      course_id: params.course_id,
      Lang: params.Lang.toLowerCase(),
    },
  };
}
