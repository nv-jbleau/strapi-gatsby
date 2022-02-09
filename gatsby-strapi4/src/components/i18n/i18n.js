import { func } from "prop-types"
import { useLocaleFromRouter } from "../../hooks/useLocalFromRouter";




export const localEnum = {
  fr: 'fr',
  en: 'en',
}

const Locales = [localEnum.fr, localEnum.en];

export function getLocaleDefault() {
  return localEnum.en;
}

export function getLocale(locale) {
  return localEnum[locale]
}

export function getLocales(exclude){
  if(exclude.length) {
    return Locales.filter(locale => !exclude.includes(locale))
  }
  return Locales
}

export function changePathNameLocale(pathname, toLocale) {
  const match = pathname.match('^\\/([a-z]{1,})(\\/.*)?');
  if(match) {
    return `/${toLocale}${match[2] || ''}`;
  }
}

export function getPageTranslation(name, pages) {
  for (const key in pages) {
    console.log('key in pages', key, pages)
    if(pages[key].name = name){
      console.log('pages[key]', pages[key])
    }
  }
}

export function getCurrentLocaleFromPathname(pathname) {
  const locale = pathname.split('/')[1];
  return getLocale(locale) ?? getLocaleDefault();
}

export function useI18n(pages) {
  const locale = useLocaleFromRouter();

  return {
    locale,
    context: {pages},
    pageTranslation: function pageTranslation(id) {
      return getPageTranslation(id, this.context.pages);
    },
  }
}