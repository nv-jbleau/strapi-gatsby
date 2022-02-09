import React from 'react'

import { Link, useLocation } from "@reach/router"
import { useContext } from "react"
import GlobalContext from "../../context/global-context"
import { useLocaleFromRouter } from "../../hooks/useLocalFromRouter";
import { changePathNameLocale, getLocales } from "../i18n/i18n";



const LangSwitch = () => {
  const { instance }  = useContext(GlobalContext);
  const location = useLocation();

  const currentLocale = useLocaleFromRouter();
  const locales = getLocales([currentLocale]);

  console.log('instance', instance)

  if(typeof instance === 'undefined') {
    return (
      <div>
        {locales.map(locale => {
          const link = changePathNameLocale(location.pathname, locale)

          return (
            <Link key={locale} to={link ? link : `/${locale}`}> 
                {locale}
            </Link>
          )
        })}
      </div>
    )
  }

  return (
    <div>
      {instance.localizations.map(localization =>{
        const link = `/${[localization.locale, localization.slug].join('/')}`;

        return (
          <link key={localization.locale} to={link} id={localization.locale}>
            {localization.locale}
          </link>
        )
      })}
    </div>
  )
}

export default LangSwitch