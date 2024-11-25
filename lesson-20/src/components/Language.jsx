import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../redux/languageSlice";

export default function Language() {
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const allLanguages = useSelector((state) => state.language.allLanguages);

  const dispatch = useDispatch();

  function handleLanguageSelect(e) {
    const newLanguage = e.target.value;
    dispatch(changeLanguage(newLanguage));
  }

  return (
    <div>
      <p>Current language: {currentLanguage}</p>
      <select onChange={handleLanguageSelect} name="lang">
        {allLanguages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
}
