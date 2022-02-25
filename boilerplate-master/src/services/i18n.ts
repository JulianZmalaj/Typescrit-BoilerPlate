import { store } from "redux/store";
import {
  setLocale,
  loadTranslations,
  syncTranslationWithStore,
} from "react-redux-i18n";
import { merge } from "lodash";

export function setLanguage(language?: string): void {
  const defaultLanguage = navigator.language.substring(0, 2) || "en";
  store.dispatch(setLocale(language || defaultLanguage));
}

export function loadLanguage(skin: string, language?: string): void {
  import(`assets/i18n/translations.json`)
    .then((globalTranslation) => {
      import(`skins/${skin}/assets/i18n/translations.json`)
        .then((skinTranslation) => {
          const translation = merge(
            globalTranslation.default,
            skinTranslation.default
          );
          store.dispatch(loadTranslations(translation));
          syncTranslationWithStore(store);
          setLanguage(language);
        })
        .catch((error: Error) => {
          throw new Error(error.message);
        });
    })
    .catch((error: Error) => {
      throw new Error(error.message);
    });
}

export default setLanguage;
