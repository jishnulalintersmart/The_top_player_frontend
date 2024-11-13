const LangWrap = ({ children, Lang }) => {

  console.log(Lang);

  return (
    <div
      className={Lang.toLowerCase() === "ar" ? "Arabic_lang" : "English_lang"}
    >
      {children}
    </div>
  );
};

export default LangWrap;
