import {useLocation} from '@reach/router'
import { getCurrentLocaleFromPathname } from '../components/i18n/i18n'


export function useLocaleFromRouter() {
  return getCurrentLocaleFromPathname(useLocation().pathname)
}