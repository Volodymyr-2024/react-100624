import { useLang } from "./LanguageContext";
import { getTranslation } from "./langUtils";

export default function Text() {
  const { lang } = useLang();

  //   if (lang === "en") {
  //     text = "Hello";
  //   } else if (lang === "es") {
  //     text = "Hola";
  //   } else if (lang === "fr") {
  //     text = "Bonjour";
  //   }

  //   switch (lang) {
  //     case "en":
  //       text = "Hello";
  //       break;
  //     case "es":
  //       text = "Hola";
  //       break;
  //     case "fr":
  //       text = "Bonjour";
  //       break;
  //     case "de":
  //       text = "Hallo";
  //       break;
  //     default:
  //       text = "Hello";
  //   }

  return <h1>{getTranslation(lang, "greeting")}</h1>;
}
