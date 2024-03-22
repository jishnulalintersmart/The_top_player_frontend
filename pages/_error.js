// import Image from "next/legacy/image";

function Error({ statusCode }) {
  return (
    <div className="container-fluid">
      <div className="container padding_all container_confirm">
        <div className="failer_card">
          <div className={"icon"}>
            <i class="checkmark">x</i>
          </div>
          <h1 className="title">{t("confirm.failure")}</h1>
          <p>{t("confirm.try")}</p>
        </div>
      </div>
      {/* <div className="NotFound">
        <div className="Image_notFound">
         
        </div>
        <h1>
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : "An error occurred on client"}
        </h1>
      </div> */}
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
