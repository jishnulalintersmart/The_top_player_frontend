import { useEffect } from "react";

const TamaraWidget = ({ Lang, country, publicKey, customCss, fontSize, badgeRatio, amount }) => {
  console.log(Lang);

  useEffect(() => {
    // Define the widget configuration
    window.tamaraWidgetConfig = {
      lang: Lang,
      country: country || "AE",
      publicKey: "a916b2ef-bb66-4e5b-84d9-5bbae98db825",
      css: customCss || "",
      style: {
        fontSize: fontSize || "16px",
        badgeRatio: badgeRatio || 1,
      },
    };

    // Load the widget script
    const script = document.createElement("script");
    script.src = "https://cdn.tamara.co/widget-v2/tamara-widget.js";
    script.defer = true;
    document.head.appendChild(script); // Append to head for better performance

    // Cleanup the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, [Lang, country, publicKey, customCss, fontSize, badgeRatio]);

  return (
    <div>
      {/* <tamara-widget type="tamara-summary"></tamara-widget> */}
      <tamara-widget
        type="tamara-summary"
        amount={amount}
        inline-type="3"
        inline-variant="outlined"
        config='{"badgePosition":"right","showExtraContent":""}'
      ></tamara-widget>
    </div>
  );
};

export default TamaraWidget;
