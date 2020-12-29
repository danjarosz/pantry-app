import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import availableLanguages from "../translations";

const useTranslation = () => {
  const { language } = useSelector((state) => ({
    language: state.settings.language,
  }));

  const [translations, setTranslations] = useState(
    availableLanguages[language]
  );

  useEffect(() => {
    setTranslations(availableLanguages[language]);
  }, [language]);

  const t = (key) => {
    const translatedWord = translations[key];
    return translatedWord || key;
  };

  return { t };
};

export default useTranslation;
