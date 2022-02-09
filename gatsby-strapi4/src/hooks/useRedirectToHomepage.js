import {navigate} from 'gatsby-link'
import { useEffect } from 'react'
import { getLocale, getLocaleDefault } from '../components/i18n/i18n';

export const useRedirectToHomepage = () => {
  useEffect(() => {
    const locale = getLocaleDefault(navigator.language.split('-'[0])) ?? getLocaleDefault();
    navigate(`/${locale}`)
  },[])

  return null;
}