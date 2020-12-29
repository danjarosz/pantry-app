export const setLanguageInLocalStorage = (lang) => {
  localStorage.setItem("language", JSON.stringify(lang));
};

export const getLanguageFromLocalStorage = () => {
  const lang = localStorage.getItem("language");
  if (lang) {
    return JSON.parse(lang);
  } else {
    return null;
  }
};
