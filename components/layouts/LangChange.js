

const LangChange = ({ children, Lang }) => {
  return (
    <div
     className={Lang.toLowerCase() === "ar" ? "Arabic_lang" :"English_lang"}
      style={{
        minHeight: "500px",
        direction: Lang.toLowerCase() === "ar" ? "rtl" : "ltr ",
      }}
    >
      {children}
    </div>
  );
};

export default LangChange;