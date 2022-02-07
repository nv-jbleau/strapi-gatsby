import { func } from "prop-types"


export const localEnum = {
  fr: 'fr',
  en: 'en',
}

export function getLocaleDefault() {
  return localEnum.en;
}

export function getLocale(locale) {
  return localEnum[locale]
}