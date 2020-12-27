import { useEffect, useState } from "react";
import _get from "lodash/get";
import { useSelector } from "react-redux";

const useTranslation = (key) => {
  const [word, setWord] = useState(null);
  const settings = useSelector((state) => _get(state, "settings"));

  useEffect(() => {
    const word = _get(settings.translations, `${key}`);
    setWord(word);
  }, [settings, key]);

  return word;
};

export default useTranslation;
