const dictionaries = {
  en: {
    greeting: "Hello",
    changeLanguage: "Change Language",
  },
  es: {
    greeting: "Hola",
    changeLanguage: "Cambiar Idioma",
  },
  fr: {
    greeting: "Bojour",
    changeLanguage: "Changer de Langue",
  },
  de: {
    greeting: "Hallo",
    changeLanguage: "Sprache ändern",
  },
};

export function getDictionary(lang) {
  return dictionaries[lang];
}

export function getTranslation(lang, key) {
  return dictionaries[lang][key];
}
