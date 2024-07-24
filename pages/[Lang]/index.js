import Head from "next/head";
import styles from "@/styles/Home.module.css";
import stylesSass from "@/styles/Home.module.scss";
// import Header from "@/components/Home/Header";
// import Who from "@/components/Home/who";
// import FAQs from "@/components/Home/FAQs";
// import Program from "@/components/Home/Program";
// import Suspense from "@/components/Home/Suspense";
// import Contact from "@/components/Home/contact";
// import LangChange from "@/components/layouts/LangChange";
import dynamic from "next/dynamic";
import LangWrap from "@/components/layouts/LangWarp";
import NewsDetail from "./news/[news_id]";
import axios from "axios";
const LangChange = dynamic(() => import("@/components/layouts/LangChange"), {
  loading: () => <></>,
  ssr: false,
});
const News = dynamic(() => import("@/components/Home/News"), {
  loading: () => <></>,
  ssr: false,
});
const Program = dynamic(() => import("@/components/Home/Program"), {
  loading: () => <></>,
  ssr: false,
});
const Suspense = dynamic(() => import("@/components/Home/Suspense"), {
  loading: () => <></>,
  ssr: false,
});
const Contact = dynamic(() => import("@/components/Home/contact"), {
  loading: () => <></>,
  ssr: false,
});
const Who = dynamic(() => import("@/components/Home/who"), {
  loading: () => <></>,
  ssr: false,
});
const Header = dynamic(() => import("@/components/Home/Header"), {
  loading: () => <></>,
  ssr: false,
});
const FAQs = dynamic(() => import("@/components/Home/FAQs"), {
  loading: () => <></>,
  ssr: false,
});
export default function Home({ Lang, MainBanner }) {
  return (
    <>
      <Head>
        <title>The Top Player</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home - The Top Player" />
        <meta
          property="og:description"
          content="The Top Player Yalla! Where You Become The Top Player Kick-start Your Journey to Excellence: Unleash Your Inner Champion with Our Premier Football Training Programs! Who Are We ? First website that is from the Middle East region to specialise in the football training, we offer comprehensive football training covering both the fitness and technique [&hellip;]"
        />
        <meta property="og:url" content="https://thetopplayer.com/" />
        <meta property="og:site_name" content="The Top Player" />
        <meta property="og:image" content="/android-chrome-192x192.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="192" />
        <meta property="og:image:height" content="192" />
      </Head>
      <main>
        <LangWrap Lang={Lang.toLowerCase()}>
          <LangChange Lang={Lang.toLowerCase()}>
            <Header
              styles={stylesSass}
              className={"sdkjbhd"}
              Lang={Lang.toLowerCase()}
              state={MainBanner[0]}
            />
            <Who styles={stylesSass} Lang={Lang.toLowerCase()} />
            <News styles={stylesSass} Lang={Lang.toLowerCase()} />
            <Program styles={styles} Lang={Lang.toLowerCase()} />
            <Suspense styles={styles} Lang={Lang.toLowerCase()} />
            <FAQs styles={styles} Lang={Lang.toLowerCase()} />
            <Contact styles={styles} Lang={Lang.toLowerCase()} />
          </LangChange>
        </LangWrap>
      </main>
    </>
  );
}
export async function getServerSideProps({ params }) {
  const result = await axios
    .get(`${process.env.customKey}/main_banner`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
      return null;
    });
  // return result;
  return {
    props: {
      Lang: params.Lang,
      MainBanner: result?.data || null,
    },
  };
}
