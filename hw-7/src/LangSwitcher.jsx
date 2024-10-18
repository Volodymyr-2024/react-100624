import { useLang } from "./LanguageContext";
import { getTranslation } from "./langUtils";

export default function LangSwitcher() {
  const context = useLang();

  function handleChangeLang(event) {
    context.setLang(event.target.value);
  }

  return (
    <>
      <label htmlFor="lang-switch">
        {getTranslation(context.lang, "changeLanguage")}
      </label>
      <select id="lang-switch" onChange={handleChangeLang}>
        <option value="en" selected={context.lang === "en"}>
          English
        </option>
        <option value="es" selected={context.lang === "es"}>
          Spanish
        </option>
        <option value="fr" selected={context.lang === "fr"}>
          French
        </option>
        <option value="de" selected={context.lang === "de"}>
          German
        </option>
      </select>
    </>
  );
}
