import Image from "next/legacy/image";
const InnerBanner = () => {
  return (
    <div className={"inner_banner"}>
      <div className={"bgImg"}>
        <Image
          src={"/images/banner-program.jpg"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"banner-program"}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      <div className={"container"}>
        <div className={"dFlx"}>
          <div className={"cntWrap"}>
            <h1 className={"mHd"}>FITNESS PROGRAM</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerBanner;
